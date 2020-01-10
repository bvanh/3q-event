import { SET_PRODUCT } from "../action_types/index";
const initialState = {
  dataEmail: [],
  visible: false,
  email: "",
  phoneNumber: "",
  statusSuccess: "*Đăng ký đạt các mốc sau vẫn nhận đầy đủ quà các mốc trước",
  statusSubmit: "",
  stepGift: [
    {
      title: "",
      value: 0,
      content: "",
      gift: [{ id: 0, name: "", number: 0 }]
    }
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      const newProducts = [...state.data];
      newProducts.push(action.db);
      return {
        ...state,
        category: action.type,
        data: newProducts
      };
    default:
      return state;
  }
};
