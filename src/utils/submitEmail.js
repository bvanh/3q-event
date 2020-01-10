import axios from "axios";
import API from "../api/index";
import QS from "querystring";


function submitEmail(mailValue,phoneNumber) {
  console.log(phoneNumber)
  const requestBody = {
    email: mailValue,
    mobile:phoneNumber
  };
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
  const mes = axios
    .post(API.API_POST_EMAIL, QS.stringify(requestBody), config)
    .then(result => {
      // Do somthing
      if (result.status === 201) {
       return 201;
      }
    })
    .catch(error => {
     return (error.response.data.message);
      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
      // Do somthing
    });
  return mes;
}
export default submitEmail;
