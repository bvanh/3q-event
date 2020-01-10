import axios from "axios";
import API from "../api/index";
function getDataEmail() {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  let data = axios
    .get(API.API_GET_CURRENT_EMAIL, config)
    .then(result => result)
    .catch(err => {
      console.log(err);
      // Do somthing
    });
    return data;
}
export default getDataEmail;
