let REACT_APP_BACKEND_URL = "";

console.log(
  REACT_APP_BACKEND_URL,
  "REACT_APP_BACKEND_URL",
  process.env.NODE_ENV
);

REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default REACT_APP_BACKEND_URL;
