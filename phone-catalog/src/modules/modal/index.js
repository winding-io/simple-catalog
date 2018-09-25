import { SHOW_MODAL, HIDE_MODAL } from './actionTypes';

const initState = {
  phoneSelected: null,
  modalShowed: false
}
export default (state = initState, action) => {
  switch(action.type) {
    case SHOW_MODAL:
      return  { modalShowed: true, phoneSelected: action.payload };
    case HIDE_MODAL:
      return  { modalShowed: false };
    default:
      return state
  }
}