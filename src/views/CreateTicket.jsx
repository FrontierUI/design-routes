import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { ChevronDown, FilePlus2, Trash2 } from 'lucide-react';

import { formatFileSize, getCookie } from '@/func';

import Toast from '@/components/Toast';
import DashboardBanner from '@/components/DashboardBanner';

const CreateTicket = () => {
  const fileInputRef = useRef(null);

  const [selectedOrderId, setSelectedOrderId] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [orderIds, setOrderIds] = useState([]);
  const [enableCreateButton, setEnableCreateButton] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchOrderIds();
  }, []);

  useEffect(() => {
    if (
      selectedOrderId !== '' &&
      selectedPriority !== '' &&
      subject.trim() !== '' &&
      description.trim() !== '' &&
      !isContentEmpty()
    )
      setEnableCreateButton(true);
    else setEnableCreateButton(false);
  }, [selectedOrderId, selectedPriority, subject, description]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleDescriptionChange = (content, delta, source, editor) => {
    setDescription(content); // content is the HTML string
  };

  const handleAttachFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    //setFiles(e.target.files); // Store FileList in state
    const selectedFiles = Array.from(e.target.files); // Convert FileList to array
    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes
    const validFiles = selectedFiles.filter((file) => file.size <= maxFileSize);
    setFiles(validFiles);
    if (validFiles.length > e.target.files)
      addToast('error', 'Max allowed file size is 5MB');
  };

  const removeAttachedFile = (e, index) => {
    e.preventDefault();
    let tempFiles = [...files];
    tempFiles.splice(index, 1);
    setFiles([...tempFiles]);
  };

  const fetchOrderIds = () => {
    const json = JSON.stringify({ token: getCookie('token') });
    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_order_ids`,
        JSON.stringify({ params: json }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setOrderIds(response.data.order_ids);
          // setTicketDetails(response.data.ticket_details);
          // setTicketResponses(response.data.ticket_responses);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const isContentEmpty = () => {
    const div = document.createElement('div');
    div.innerHTML = description;
    return div.innerText.trim() === '';
  };

  const handleCreateTicket = async (e) => {
    e.preventDefault();
    if (
      selectedOrderId !== '' &&
      selectedPriority !== '' &&
      subject.trim() !== '' &&
      description.trim() !== '' &&
      !isContentEmpty()
    ) {
      let Payload = {
        token: getCookie('token'),
        order_id: selectedOrderId,
        subject: subject.trim(),
        description: description,
        priority: selectedPriority,
        files: [], // Array to hold base64-encoded files
      };
      // Convert files to base64
      if (files && files.length > 0) {
        const filePromises = Array.from(files).map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const ext = file.name.split('.').pop().toLowerCase();
              const validTypes = {
                'image/png': 'png',
                'image/jpeg': 'jpg',
                'image/jpg': 'jpg',
                'application/pdf': 'pdf',
                'application/msword': 'doc',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
                  'docx',
              };
              if (!validTypes[file.type]) {
                reject(new Error(`Unsupported file type: ${file.type}`));
                return;
              }
              resolve({
                name: file.name,
                type: file.type,
                extension: validTypes[file.type],
                size: Math.round(file.size / 1000) + ' kB',
                base64: reader.result.split(',')[1], // Remove data URL prefix
              });
            };
            reader.onerror = () =>
              reject(new Error(`Failed to read file: ${file.name}`));
          });
        });
        Payload.files = await Promise.all(filePromises);
      }

      const json = JSON.stringify(Payload);

      axios
        .post(
          `${import.meta.env.VITE_BASE_API}/api.php?action=create_ticket`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            setDescription('');
            setFiles([]); // Clear file input
            addToast('success', response.data.message);
            if (
              response.data.uploaded_files &&
              response.data.uploaded_files.length > 0
            ) {
              addToast(
                'success',
                `Uploaded ${response.data.uploaded_files.length} file(s) successfully`
              );
            }
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  };

  return (
    <div className="relative w-full h-full createTicket">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="relative bg-white w-full h-full rounded-lg flex flex-col">
          <div className="bg-primary h-3 w-full rounded-t-lg" />
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          ))}
          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="flex flex-col space-y-5 lg:space-y-7 w-full h-full relative py-5 lg:px-2">
              <form className="ticket-form ">
                <div className="ticket-formItem">
                  <label className="ticket-formLabel">Order ID</label>
                  <div className="relative flex items-center w-full">
                    <select
                      className="ticket-select"
                      value={selectedOrderId}
                      onChange={(e) => setSelectedOrderId(e.target.value)}
                    >
                      <option className="ticket-selectOpt" value={''}>
                        Select Order Id
                      </option>
                      {orderIds.map((orderid, index) => (
                        <option
                          className="ticket-selectOpt"
                          key={index}
                          value={orderid}
                        >
                          {orderid}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-2 flex items-center">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="ticket-formItem relative">
                  <label className="ticket-formLabel">Priority</label>
                  <div className="relative flex items-center w-full">
                    <select
                      className="ticket-select"
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                    >
                      <option className="ticket-selectOpt" value={''}>
                        Select Priority
                      </option>
                      <option className="ticket-selectOpt" value={'low'}>
                        Low
                      </option>
                      <option className="ticket-selectOpt" value={'medium'}>
                        Medium
                      </option>
                      <option className="ticket-selectOpt" value={'high'}>
                        High
                      </option>
                    </select>
                    <div className="absolute right-2 flex items-center">
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                <div className="ticket-subject">
                  <label className="ticket-formLabel">Subject</label>
                  <input
                    required
                    placeholder="Enter Subject"
                    type="text"
                    className="ticket-formInput"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="ticket-details">
                  <label className="ticket-formLabel">Request Details:</label>
                  <ReactQuill
                    className="w-full min-h-full rounded-xl"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                </div>

                <div className="ticket-fileAttach mt-20 max-lg:mt-24">
                  <input
                    id="files"
                    type="file"
                    name="files[]"
                    multiple
                    accept=".png,.jpg,.pdf,.doc,.docx"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <button
                    className="ticket-formLabel flexy gap-3 cursor-pointer"
                    onClick={handleAttachFile}
                  >
                    <FilePlus2 className="w-8 h-8 text-gray-500" />
                    File Attach
                  </button>
                  {files.length > 0 ? (
                    [...files].map((file, index) => (
                      <div
                        className="flexBetween flex-wrap gap-3 w-full md:w-1/2 text-sm"
                        key={index}
                      >
                        <div className="flex-1 ">
                          {file.name}
                          <span className="pl-2 text-gray-500 text-xs">
                            {formatFileSize(file.size)}
                          </span>
                        </div>
                        <button
                          className="py-2 px-4 flexy gap-3 bg-red-100 text-red-500 rounded-lg"
                          onClick={(e) => removeAttachedFile(e, index)}
                        >
                          Remove
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))
                  ) : (
                    <div className="flexBetween flex-wrap gap-3 w-full text-sm">
                      <div
                        className="flex-1 text-center p-4"
                        style={{
                          backgroundColor: '#eee',
                          borderRadius: '5px',
                        }}
                      >
                        No attachment
                      </div>
                    </div>
                  )}
                </div>

                <div className="ticket-btn ">
                  <button
                    type="submit"
                    className={`py-2 px-4 flexBetween gap-3 rounded-lg bg-primary text-white font-monaSemibold${
                      enableCreateButton ? '' : ' opacity-50 cursor-not-allowed'
                    }`}
                    disabled={!enableCreateButton}
                    onClick={handleCreateTicket}
                  >
                    Create Ticket
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
