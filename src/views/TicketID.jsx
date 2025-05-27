import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  ChevronDown,
  Edit,
  FilePlus2,
  SendHorizontal,
  Trash2,
  RefreshCw,
} from 'lucide-react';

import {
  formatDate,
  formatTime,
  getCookie,
  checkRole,
  formatFileSize,
} from '../func';

import DashboardBanner from '@/components/DashboardBanner';
import Toast from '@/components/Toast';

let orderStatus = '';

const TicketID = () => {
  const { id } = useParams();
  const fileInputRef = useRef(null);

  const [status, setStatus] = useState('');
  const [enableUpdateButton, setEnableUpdateButton] = useState(false);
  const [ticketDetails, setTicketDetails] = useState({});
  const [ticketResponses, setTicketResponses] = useState([]);
  const [response, setResponse] = useState('');
  const [ticketAttachments, setTicketAttachments] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (id !== null && id !== undefined) fetchTicketDetails();
    return () => {
      setTicketDetails({});
    };
  }, []);

  useEffect(() => {
    if (status !== orderStatus) setEnableUpdateButton(true);
    else setEnableUpdateButton(false);
  }, [status]);

  useEffect(() => {
    orderStatus = ticketDetails?.status;
  }, [ticketDetails]);

  const addToast = (type, message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const fetchTicketDetails = () => {
    const json = JSON.stringify({
      token: getCookie('token'),
      ticketid: atob(atob(id)),
    });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_ticket_details`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setTicketDetails(response.data.ticket_details);
          setTicketResponses(response.data.ticket_responses);
          setTicketAttachments(response.data.ticket_attachments);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const StatusBedge = ({ Status }) => {
    if (Status === 'in-progress')
      return (
        <button className="bg-blue-100 text-blue-500 px-5 py-2 rounded-lg">
          In Progress
        </button>
      );
    else if (Status === 'closed')
      return (
        <button className="bg-green-100 text-green-500 px-5 py-2 rounded-lg">
          Closed
        </button>
      );
    else if (Status === 'open')
      return (
        <button className="bg-red-100 text-red-500 px-5 py-2 rounded-lg">
          Open
        </button>
      );
  };

  const handleChange = (e) => {
    const newStatus = e.target.value;
    if (newStatus !== '') setStatus(newStatus);
    // You can also call an API or trigger any side effect here
  };

  const handleResponseChange = (content, delta, source, editor) => {
    setResponse(content); // content is the HTML string
  };

  const handleAttachFile = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const maxFileSize = 5 * 1024 * 1024; // 5 MB in bytes

    const validFiles = selectedFiles.filter((file) => file.size <= maxFileSize);

    setFiles(validFiles);

    if (validFiles.length > e.target.files)
      addToast('error', 'Max allowed file size is 5MB');
  };

  const isContentEmpty = () => {
    const div = document.createElement('div');
    div.innerHTML = response;
    return div.innerText.trim() === '';
  };

  const updateTicketStatus = () => {
    if (status !== orderStatus) {
      const json = JSON.stringify({
        token: getCookie('token'),
        ticket_id: ticketDetails.ticket_id,
        status: status,
      });

      axios
        .post(
          `${
            import.meta.env.VITE_BASE_API
          }/api.php?action=update_ticket_status`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            orderStatus = status;
            setEnableUpdateButton(false);
            addToast('success', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  };

  const addTicketResponse = async () => {
    if (status !== orderStatus) {
      let Payload = {
        token: getCookie('token'),
        ticket_id: ticketDetails.ticket_id,
        response: response,
        files: [], // Array to hold base64-encoded files
      };

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
          `${import.meta.env.VITE_BASE_API}/api.php?action=add_ticket_response`,
          JSON.stringify({ params: json }),
          { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
        )
        .then((response) => {
          if (response.data.success === 'true') {
            setResponse('');
            setFiles([]);
            fetchTicketDetails();
            addToast('success', response.data.message);
          }
        })
        .catch((error) => {
          console.error(`Error: ${error}`);
        });
    }
  };

  return (
    <div className="relative w-full h-full ticketId">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10">
        <DashboardBanner />

        <div className="relative bg-white rounded-lg w-full">
          <div className="w-full p-5">
            <div className="flexStart flex-col space-y-2">
              <h2 className="text-lg font-monaSemibold">
                Order ID: {ticketDetails.order_id}
              </h2>
              <span>
                <b>Subject content:</b> {ticketDetails.subject}
              </span>
            </div>
          </div>
        </div>

        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
        <div className="relative bg-white w-full h-full rounded-lg flex flex-col">
          <div className="bg-primary h-3 w-full rounded-t-lg" />

          <div className="flex relative w-full h-full p-3 lg:p-6">
            <div className="relative space-y-5 lg:space-y-7 w-full h-full py-5 lg:px-2">
              <div className="flex flex-wrap w-full gap-5">
                <div className="max-w-full w-full lapy:w-[55%] rounded-lg">
                  <div className="border-2 border-dashed border-gray-400 rounded-lg overflow-hidden shadow w-full lg:min-h-[560px]">
                    <div className="p-5 pt-8 flex flex-wrap w-full">
                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Priority
                          </h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        {/* yeh admin pr ayega Edit icon pr clicked hoga phr  select dropdown open hoga or user edit kaa icon hide hoga */}
                        {/* <div className="relative flex items-center w-40">
                          <select className="ticket-select !text-sm">
                            <option className="ticket-selectOpt !text-sm">
                              Select Priority
                            </option>
                            <option className="ticket-selectOpt">Low</option>
                          </select>
                          <div className="absolute right-2 flex items-center">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div> */}
                        {/* yeh admin pr ayega Edit icon pr clicked hoga phr  select dropdown open hoga or user edit kaa icon hide hoga */}
                        <div className="flex pt-2 capitalize">
                          <span>{ticketDetails.priority}</span>
                        </div>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">Status</h3>
                          <Edit className="text-gray-600" />
                        </div>
                        {checkRole(getCookie('token')) === 'admin' && (
                          <div className="relative flex items-center w-40">
                            <select
                              className="ticket-select !text-sm"
                              value={
                                status !== '' ? status : ticketDetails?.status
                              }
                              onChange={handleChange}
                            >
                              <option
                                className="ticket-selectOpt !text-sm"
                                value={''}
                                onClick={() => setEnableUpdateButton(false)}
                              >
                                Select Priority
                              </option>
                              <option
                                className="ticket-selectOpt"
                                value={'open'}
                              >
                                Open
                              </option>
                              <option
                                className="ticket-selectOpt"
                                value={'in-progress'}
                              >
                                In Progress
                              </option>
                              <option
                                className="ticket-selectOpt"
                                value={'closed'}
                              >
                                Closed
                              </option>
                            </select>
                            <div className="absolute right-2 flex items-center">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                        )}
                        <div className="flex pt-2">
                          {/* <span className="py-2 px-4 bg-yellow-100 text-yellow-500 rounded-lg">
                            Pending
                          </span> */}
                          {checkRole(getCookie('token')) === 'admin' && (
                            <button
                              className={`min-w-40 w-full bg-primary text-white py-2 px-3 gap-4 flexBetween rounded-lg${
                                status !== '' && enableUpdateButton
                                  ? ''
                                  : ' opacity-50 cursor-not-allowed'
                              }`}
                              disabled={status === '' || !enableUpdateButton}
                              onClick={updateTicketStatus}
                            >
                              Update
                              <RefreshCw className="w-6" />
                            </button>
                          )}
                          {checkRole(getCookie('token')) !== 'admin' && (
                            <StatusBedge Status={ticketDetails?.status} />
                          )}
                        </div>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full lg:w-1/3 pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Created At
                          </h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>{formatDate(ticketDetails.created_at)}</span>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">Subject</h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>{ticketDetails.subject}</span>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Request Details:
                          </h3>
                          {/* <Edit className="text-gray-600" /> */}
                        </div>
                        <span>{ticketDetails.description}</span>
                      </div>

                      <div className="relative flexStart flex-col space-y-2 w-full pb-8">
                        <div className="flex items-center gap-2">
                          <h3 className="font-monaSemibold text-lg">
                            Attached file(s):
                          </h3>
                        </div>
                        {ticketAttachments?.length > 0 ? (
                          ticketAttachments?.map((attachment, index) => (
                            <div
                              className="flexBetween flex-wrap gap-3 w-full text-sm p-2"
                              key={index}
                              style={{
                                backgroundColor: '#eeeeee66',
                                borderRadius: '5px',
                              }}
                            >
                              <Link
                                className="flex-1 "
                                //onClick={() => handleDownload(`${import.meta.env.VITE_BASE_API}/uploads/tickets/${attachment.file_path}`)}
                                to={`${
                                  import.meta.env.VITE_BASE_API
                                }/uploads/tickets/${attachment.file_path}`}
                                download={attachment.file_path}
                                target="_blank"
                              >
                                {attachment.file_name}
                                <span className="pl-2 text-gray-500 text-xs">
                                  {formatFileSize(attachment.file_size)}
                                </span>
                              </Link>
                              {/* <button className="py-2 px-4 flexy gap-3 bg-red-100 text-red-500 rounded-lg">
                                Remove
                                <Trash2 className="w-5 h-5" />
                              </button> */}
                              {parseInt(
                                atob(atob(getCookie('token')))?.split('|')[0]
                              ) !== attachment.attached_by ? (
                                <div className="py-1 px-2 flexy gap-1 bg-green-100 text-green-500 rounded-lg">
                                  Attached By:
                                  <span className="font-monaSemibold">
                                    Admin
                                  </span>
                                </div>
                              ) : (
                                <div className="py-1 px-2 flexy gap-1 bg-blue-100 text-blue-500 rounded-lg">
                                  Attached By:
                                  <span className="font-monaSemibold">
                                    User
                                  </span>
                                </div>
                              )}
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
                              No attachment found
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="relative flexStart flex-col space-y-3 w-full pb-8">
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
                          id="btnAttachFile"
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
                              No new file attached
                            </div>
                          </div>
                        )}
                        {/* <div className="flexBetween flex-wrap gap-3 w-full text-sm">
                          <div className="flex-1 ">
                            filename.psd
                            <span className="pl-2 text-gray-500 text-xs">
                              (204.54 KB)
                            </span>
                          </div>
                          <button className="py-2 px-4 flexy gap-3 bg-red-100 text-red-500 rounded-lg">
                            Remove
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div> */}
                      </div>

                      {/* <div className="relative w-full pb-4">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-xl font-monaSemibold">
                          Save
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="max-w-full w-full lapy:w-[43%] rounded-lg">
                  <div className="border-2 border-dashed border-gray-400 rounded-lg overflow-hidden shadow w-full lg:min-h-[560px]">
                    <div className="flexStart flex-col space-y-10 p-5 pt-8 w-full">
                      <div className="flexStart flex-col space-y-1">
                        <h2 className="text-xl font-monaSemibold">
                          Discussion
                        </h2>
                        <p className="text-sm">
                          Comment histories for this ticket will be available
                          here.
                        </p>
                      </div>

                      <div className="flexStart flex-col space-y-8 w-full">
                        {ticketResponses.length > 0
                          ? ticketResponses.map((ticket, index) => {
                              return ticket.role === 'admin' ? (
                                <div className="flex lg:items-end lg:justify-end gap-3 w-full">
                                  <div className="flex lg:items-end flex-col space-y-1.5">
                                    <span className="py-2  px-3 rounded-t-lg rounded-bl-lg bg-blue-200">
                                      {ticket.response}
                                    </span>
                                    <span className="text-xs">
                                      {formatDate(ticket.response_date)}{' '}
                                      {formatTime(ticket.response_date)}
                                    </span>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex gap-3 w-full">
                                  <div className="flex avatar">
                                    <img
                                      src="/images/icons/ProfAvatar.svg"
                                      className="img-fluid w-12"
                                      alt=""
                                    />
                                  </div>
                                  <div className="flexStart flex-col space-y-1.5">
                                    <h3 className="text-lg font-monaSemibold capitalize">
                                      {ticket.name}
                                    </h3>
                                    <span className="py-2 px-3 rounded-tr-lg rounded-b-lg bg-blue-200">
                                      {ticket.response}
                                    </span>
                                    <span className="text-xs">
                                      {formatDate(ticket.response_date)}{' '}
                                      {formatTime(ticket.response_date)}
                                    </span>
                                  </div>
                                </div>
                              );
                            })
                          : null}

                        {/* <div className="flex gap-3 w-full">
                          <div className="flex avatar">
                            <img
                              src="/images/icons/ProfAvatar.svg"
                              className="img-fluid w-12"
                              alt=""
                            />
                          </div>
                          <div className="flexStart flex-col space-y-1.5">
                            <h3 className="text-lg font-monaSemibold">
                              Ustaad
                            </h3>
                            <span className="py-2 px-3 rounded-tr-lg rounded-b-lg bg-blue-200">
                              paayen ye username response
                            </span>
                            <span className="text-xs">time spam 4:10pm</span>
                          </div>
                        </div>
                        <div className="flex lg:items-end lg:justify-end gap-3 w-full">
                          <div className="flex lg:items-end flex-col space-y-1.5">
                            <span className="py-2  px-3 rounded-t-lg rounded-bl-lg bg-blue-200">
                              paayen ye admin response
                            </span>
                            <span className="text-xs">time spam 4:10pm</span>
                          </div>
                        </div> */}
                      </div>

                      <div className="relative flex items-center gap-2 pb-8 w-full h-full">
                        <ReactQuill
                          theme="snow"
                          className="max-sm:w-10/12 w-[95%] lapy:w-[88%] sm:min-h-24 sm:h-24"
                          value={response}
                          onChange={handleResponseChange}
                        />

                        {response.trim() !== '' && !isContentEmpty() ? (
                          <div
                            className="absolute bottom-8 sm:-bottom-1 right-0"
                            onClick={addTicketResponse}
                          >
                            <div className="flexy bg-primary text-white rounded-full p-2">
                              <SendHorizontal className="w-6" />
                            </div>
                          </div>
                        ) : (
                          <div className="absolute bottom-8 sm:-bottom-1 right-0 opacity-50 cursor-not-allowed">
                            <div className="flexy bg-primary text-white rounded-full p-2">
                              <SendHorizontal className="w-6" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketID;
