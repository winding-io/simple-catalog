import { SHOW_MODAL, HIDE_MODAL } from './actionTypes'

export const showModal = (phoneSelected) => {
  return {
      type: SHOW_MODAL,
      payload: phoneSelected
  }
}
export const hideModal = () => {
  return {
      type: HIDE_MODAL
  }
}
