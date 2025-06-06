import { useEffect, useState } from 'react';
import axios from 'axios';

import { Pencil, Check } from 'lucide-react';

import { getCookie } from '@/func';

const Settings = () => {
  const [userProfile, setUserProfile] = useState({});

  const [jobDesignation, setJobDeignation] = useState(null);
  const [phone, setPhone] = useState(null);
  const [bio, setBio] = useState(null);
  const [address, setAddress] = useState(null);
  const [profilePicture, setProfilePicture] = useState([]);

  const [editMode, setEditMode] = useState({
    profile: false,
    personal: false,
    address: false,
  });

  useEffect(() => {
    if (getCookie('token') !== undefined) fetchUserProfile();
  }, []);

  // useEffect(() => {
  //   console.log('userProfile', userProfile);
  // }, [userProfile]);

  const changeHandler = (e) => {
    let files = e.target.files;
    //console.log("files: ", files);

    var allFiles = [];
    for (var i = 0; i < files.length; i++) {
      let file = files[i];

      let ext = '';
      switch (file.type) {
        case 'image/x-png':
          ext = 'png';
          break;
        case 'image/png':
          ext = 'png';
          break;
        case 'image/jpeg':
          ext = 'jpg';
          break;
        case 'image/webp':
          ext = 'webp';
          break;
        default:
          break;
      }

      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        let fileInfo = {
          name: file.name.replace(`.${ext}`, ''),
          type: file.type,
          extention: ext,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        allFiles.push(fileInfo);

        if (allFiles.length == files.length) {
          console.log(allFiles);
          //if (this.props.multiple) this.props.onDone(allFiles);
          //else this.props.onDone(allFiles[0]);
          setProfilePicture(allFiles);
        }
      };
    }
  };

  const removeImage = (i) => {
    let array = [...images];
    array.splice(i, 1);
    setProfilePicture(array);
  };

  const ReturnProfilePictureUrl = () => {
    let url = '';

    if (profilePicture.length > 0) {
      url = profilePicture[0]['base64'];
    } else if (
      userProfile?.profile_picture !== '' &&
      userProfile?.profile_picture !== null
    ) {
      url =
        userProfile.registration_method === 'website'
          ? `${import.meta.env.VITE_BASE_API}${userProfile.profile_picture}`
          : `${userProfile.profile_picture}`;
    } else {
      url = '/images/icons/ProfAvatar.svg';
    }

    return <img src={url} className="img-fluid w-12" alt="" />;
  };

  const fetchUserProfile = () => {
    const json = JSON.stringify({ token: getCookie('token') });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=get_profile`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          setUserProfile(JSON.parse(atob(atob(response.data.result)))[0]);
          // setDashboardData(response.data);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const updateUserProfile = (data) => {
    const json = JSON.stringify({ token: getCookie('token'), ...data });

    axios
      .post(
        `${import.meta.env.VITE_BASE_API}/api.php?action=update_profile`,
        JSON.stringify({ params: json }),
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      )
      .then((response) => {
        if (response.data.success === 'true') {
          fetchUserProfile();
          window.localStorage.setItem('loginSecret', response.data.secret);

          const customEvent = new CustomEvent('myCustomStorageEvent', {});
          window.dispatchEvent(customEvent);
        }
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
      });
  };

  const handleEnableEdit = (type) => {
    if (type === 'profile') {
      setEditMode({ profile: true, personal: false, address: false });
    } else if (type === 'personal') {
      setEditMode({ profile: false, personal: true, address: false });
    } else if (type === 'address') {
      setEditMode({ profile: false, personal: false, address: true });
    }
  };

  const handleDisableEdit = (type) => {
    if (type === 'profile') {
      let myUpdateObject = {
        id: userProfile.id,
        job_designation:
          userProfile.job_designation !== null
            ? userProfile.job_designation
            : '',
        bio: userProfile.bio !== null ? userProfile.bio : '',
        phone: userProfile.phone !== null ? userProfile.phone : '',
        address: userProfile.address !== null ? userProfile.address : '',
        profile_picture: profilePicture !== null ? profilePicture : [],
      };

      setEditMode({ profile: false, personal: false, address: false });

      updateUserProfile(myUpdateObject);
    } else if (type === 'personal') {
      let myUpdateObject = {
        id: userProfile.id,
        job_designation: jobDesignation !== null ? jobDesignation : '',
        bio: bio !== null ? bio : '',
        phone: phone !== null ? phone : '',
        address: userProfile.address !== null ? userProfile.address : '',
        profile_picture:
          userProfile.profile_picture !== null
            ? userProfile.profile_picture
            : '',
      };

      setEditMode({ profile: false, personal: false, address: false });

      updateUserProfile(myUpdateObject);
    } else if (type === 'address') {
      let myUpdateObject = {
        id: userProfile.id,
        job_designation:
          userProfile.job_designation !== null
            ? userProfile.job_designation
            : '',
        bio: userProfile.bio !== null ? userProfile.bio : '',
        phone: userProfile.phone !== null ? userProfile.phone : '',
        address: address !== null ? address : '',
        profile_picture:
          userProfile.profile_picture !== null
            ? userProfile.profile_picture
            : '',
      };

      setEditMode({ profile: false, personal: false, address: false });

      updateUserProfile(myUpdateObject);
    }
  };

  return (
    <div className="settings relative w-full h-full">
      <div className="relative w-full h-full flex flex-col space-y-5 lg:space-y-10 mt-8 mb-5 lg:mb-10 bg-white px-2.5 py-5 lg:pb-12 lg:px-10 rounded-lg">
        <h1 className="font-monaBold text-3xl">Profile</h1>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flex items-center justify-start md:justify-between gap-5 w-full">
            <div className="flex items-center gap-2.5">
              {/* {userProfile?.profile_picture !== '' &&
              userProfile?.profile_picture !== null ? (
                <img
                  src={
                    userProfile.registration_method === 'website'
                      ? `${import.meta.env.VITE_BASE_API}${
                          userProfile.profile_picture
                        }`
                      : `${userProfile.profile_picture}`
                  }
                  className="img-fluid w-12"
                  alt=""
                />
              ) : (
                <img
                  src="/images/icons/ProfAvatar.svg"
                  className="img-fluid w-12"
                  alt=""
                />
              )} */}

              {editMode.profile === true ? (
                <div className="flex flex-col">
                  <ReturnProfilePictureUrl />
                  <input
                    type="file"
                    onChange={changeHandler}
                    name="profile_picture"
                    accept="image/x-png,image/gif,image/jpeg"
                  />
                </div>
              ) : (
                <ReturnProfilePictureUrl />
              )}

              <div className="flex flex-col leading-none">
                <h2 className="font-monaBold text-xl">{userProfile?.name}</h2>
                <span className="font-monaLight text-sm">
                  {userProfile?.email}
                </span>
              </div>
            </div>

            <div className="flex items-start justify-end w-full">
              {editMode.profile === true ? (
                <button
                  className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                  onClick={() => handleDisableEdit('profile')}
                >
                  <Check className="sm:w-5 sm:h-5 h-4 w-4" />
                </button>
              ) : (
                <button
                  className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                  onClick={() => handleEnableEdit('profile')}
                >
                  <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flexStart flex-col space-y-5">
            <div className="flex items-center justify-start md:justify-between gap-5 w-full">
              <h3 className="text-md lg:text-xl font-monaSemibold whitespace-nowrap">
                Personal Information
              </h3>

              <div className="flex items-start justify-end w-full">
                {editMode.personal === true ? (
                  <button
                    className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                    onClick={() => handleDisableEdit('personal')}
                  >
                    <Check className="sm:w-5 sm:h-5 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                    onClick={() => handleEnableEdit('personal')}
                  >
                    <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-2/5">
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">Full Name</span>
                  <span className="font-monaMedium">{userProfile?.name}</span>
                </div>
                <div className="flex flex-col space-y-1 md:pr-4">
                  <span className="text-sm text-gray-500">Email Address</span>
                  <span className="font-monaMedium">{userProfile?.email}</span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flex flex-col space-y-1 md:pr-4">
                  <span className="text-sm text-gray-500">Job Designation</span>
                  {editMode.personal === true ? (
                    <input
                      type="text"
                      className="font-monaMedium ticket-formInput"
                      value={
                        jobDesignation !== null
                          ? jobDesignation
                          : userProfile?.job_designation
                      }
                      onChange={(e) => setJobDeignation(e.target.value)}
                    ></input>
                  ) : (
                    <span className="font-monaMedium">
                      {userProfile?.job_designation}
                    </span>
                  )}
                  {/* <span className="font-monaMedium">{userProfile?.job_designation}</span> */}
                </div>
                <div className="flexStart flex-col space-y-1">
                  <span className="text-sm text-gray-500">Phone</span>
                  {/* <span className="font-monaMedium">
                    {userProfile?.phone !== "" && userProfile?.phone !== null
                      ? userProfile?.phone
                      : "N/A"}
                  </span> */}
                  {editMode.personal === true ? (
                    <input
                      type="text"
                      className="font-monaMedium ticket-formInput"
                      value={phone !== null ? phone : userProfile?.phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  ) : (
                    <span className="font-monaMedium">
                      {userProfile?.phone !== '' && userProfile?.phone !== null
                        ? userProfile?.phone
                        : 'N/A'}
                    </span>
                  )}
                </div>
              </div>

              <div className="flexStart flex-col space-y-1">
                <span className="text-sm text-gray-500">Bio</span>
                {/* <span className="font-monaMedium">
                  {userProfile?.bio !== "" && userProfile?.bio !== null
                    ? userProfile?.bio
                    : "N/A"}
                </span> */}
                {editMode.personal === true ? (
                  <input
                    type="text"
                    className="font-monaMedium ticket-formInput"
                    value={bio !== null ? bio : userProfile?.bio}
                    onChange={(e) => setBio(e.target.value)}
                  ></input>
                ) : (
                  <span className="font-monaMedium">
                    {userProfile?.bio !== '' && userProfile?.bio !== null
                      ? userProfile?.bio
                      : 'N/A'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full relative border-2 border-gray-300 border-dashed rounded-md p-2 md:p-5">
          <div className="flexStart flex-col space-y-5">
            <div className="flex items-center justify-start md:justify-between gap-5 w-full">
              <h3 className="text-md lg:text-xl font-monaSemibold whitespace-nowrap">
                Address
              </h3>
              <div className="flex items-start justify-end w-full">
                {editMode.address === true ? (
                  <button
                    className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                    onClick={() => handleDisableEdit('address')}
                  >
                    <Check className="sm:w-5 sm:h-5 h-4 w-4" />
                  </button>
                ) : (
                  <button
                    className="flexy p-2.5 max-xs:w-5 max-xs:h-5 bg-primary text-white rounded-full"
                    onClick={() => handleEnableEdit('address')}
                  >
                    <Pencil className="sm:w-5 sm:h-5 h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-2/5">
              <div className="flex flex-col lg:flex-row items-start justify-start md:justify-between gap-4 w-full">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm text-gray-500">
                    Complete Address
                  </span>
                  {/* <span className="font-monaMedium">
                    {userProfile?.address !== "" && userProfile?.address !== null
                      ? userProfile?.address
                      : "N/A"}
                  </span> */}
                  {editMode.address === true ? (
                    <input
                      type="text"
                      className="font-monaMedium ticket-formInput"
                      value={address !== null ? address : userProfile?.address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></input>
                  ) : (
                    <span className="font-monaMedium">
                      {userProfile?.address !== '' &&
                      userProfile?.address !== null
                        ? userProfile?.address
                        : 'N/A'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
