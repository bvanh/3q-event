import { actions } from "../action_types/index";

const setDataEmail = payload => {
  return {
    type: actions.GET_DATAEMAIL,
    db: payload
  };
};
const showModal = payload => {
  return {
    type: actions.SET_MODAL,
    db: payload
  };
};
const offModal = () => {
  return {
    type: actions.OFF_MODAL
  };
};
const getInfo = payload => {
  console.log(payload.target.name)
  return {
    type: actions.GET_INFO,
    db: payload
  };
};
const setStatus = payload => {
  return {
    type: actions.SET_STATUS,
    payload
  };
};
const runVideo = payload => {
  return {
    type: actions.RUN_VIDEO,
    payload
  };
};
export { setDataEmail, showModal, offModal, getInfo, setStatus, runVideo };
