import { UPDATE_PHONES } from './actionTypes';
import axios from 'axios';
const API_URL = 'http://localhost:8000';

export const fetchPhones = () => {
  return(dispatch)=>{
    return axios.get(`${ API_URL }/phones`).then(( response )=>{
      dispatch(updatePhones( [ ...response.data ] ));
    }).catch( ( error ) => {
      console.error( error );
    });
  }
}

export const updatePhones = ( phones ) => {
	return {
      type: UPDATE_PHONES,
      payload: phones
  }
}