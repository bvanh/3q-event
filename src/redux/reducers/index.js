import { actions } from "../action_types/index";
const initialState = {
  dataEmail: [],
  visible: false,
  email: "",
  phoneNumber: "",
  statusSubmit: "",
  stepGift: [
    {
      title: "",
      value: 0,
      content: "",
      gift: [{ id: "", name: "", number: 0 }],
      giftAllServer: {
        id: "",
        name: "",
        number: 0,
        type: ""
      },
      notice: "",
      type: ""
    }
  ],
  isRunVideo: [
    {
      run: false,
      show: "hidden",
      showThumbnail: "block"
    }
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATAEMAIL:
      return { ...state, dataEmail: action.db };
    case actions.SET_MODAL:
      return {
        ...state,
        visible: true,
        stepGift: action.db
      };
    case actions.OFF_MODAL:
      return { ...state, visible: false };
    case actions.GET_INFO:
      return {
        ...state,
        [action.db.target.name]: action.db.target.value
      };
    case actions.SET_STATUS:
      return { ...state, statusSubmit: action.payload };
    case actions.RUN_VIDEO:
      return { ...state, isRunVideo: action.payload };
    default:
      return state;
  }
};
