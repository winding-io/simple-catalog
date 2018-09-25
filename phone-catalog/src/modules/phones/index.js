import { UPDATE_PHONES } from './actionTypes'

const initState = {
  phones:[],
  phoneSelected: null,
  modalShowed: false
}
export default (state = initState, action) => {
  switch(action.type) {
    case UPDATE_PHONES:
			return  action.payload;
    default:
      return state
  }
}