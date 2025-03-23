import { Base64 } from 'js-base64';

const appendScript = (scriptToAppend, scriptToAppendID) => {
  const script = document.createElement('script');
  script.src = scriptToAppend;
  script.async = true;

  if (scriptToAppendID !== undefined) script.id = scriptToAppendID;

  document.body.appendChild(script);
};

const removeScript = (scriptToRemoveID) => {
  var elem = document.getElementById(scriptToRemoveID);

  if (elem !== null) elem.remove();
};

const appendStylesheet = (scriptToAppend, scriptToAppendID) => {
  const link = document.createElement('link');
  link.href = scriptToAppend;

  if (scriptToAppendID !== undefined) link.id = scriptToAppendID;

  document.body.appendChild(link);
};

const removeStylesheet = (scriptToRemoveID) => {
  var elem = document.getElementById(scriptToRemoveID);

  if (elem !== null) elem.remove();
};

const setCookie = (name, value, days) => {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + (value || '') + expires + '; path=/';
};

const getCookie = (name) => {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const eraseCookie = (name) => {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

const checkRole = (token) => {
  //return window.atob(window.atob(token)).split("|")[3];
  return base64_decode(token).split('|')[3];
};

const base64_encode = (value) => {
  if (value.trim() === '') return null;

  return Base64.encode(value);
};

const base64_decode = (value) => {
  if (value.trim() === '') return null;

  return Base64.decode(Base64.decode(value));
};

const validate_textfield = (text) => {
  if (text != null && text.toString().trim() !== '') return true;

  return false;
};

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

const formatDate = (dateString) => {
  let date = new Date(dateString),
    day = date.getDay(),
    month = date.getMonth(),
    year = date.getFullYear(),
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

  return day + '-' + months[month] + '-' + year;
};

const addScript = (
  url,
  id,
  integrity,
  async = true,
  crossOrigin = 'anonymous'
) => {
  const script = document.createElement('script');
  script.src = url;
  script.id = id;

  if (async) script.async = async;

  if (integrity) script.integrity = integrity;

  script.crossOrigin = crossOrigin;
  document.body.appendChild(script);
};

const validateEmail = (text) => {
  const regex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  return regex.test(text);
};

const validateUrl = (text) => {
  var expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);

  return regex.test(text);
};

const validatePhone = (text) => {
  //var expression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  var expression = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
  var regex = new RegExp(expression);

  return regex.test(text);
};

export {
  appendScript,
  removeScript,
  setCookie,
  getCookie,
  eraseCookie,
  checkRole,
  base64_encode,
  base64_decode,
  validate_textfield,
  openInNewTab,
  formatDate,
  addScript,
  appendStylesheet,
  removeStylesheet,
  validateEmail,
  validateUrl,
  validatePhone,
};
