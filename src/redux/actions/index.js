import { SET_PRODUCT } from '../action_types/index';

export const setProduct = payload => {
  return {
    type: SET_PRODUCT,
    db: payload
  };
};
