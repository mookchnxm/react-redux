import axios from 'axios'
const URL ='http://localhost/api/curriculums/';
export const FETCH_CURRICULUMS = 'fetch_curriculums';
export const CHANGE_CURRICULUMS = 'change_curriculums';

export function changeCurriculums(value) {
  console.log(value);
  return {
    type:CHANGE_CURRICULUMS,
    payload:value
  }
}

export  function  fetchCurriculums(){
  const response =  axios.get(`${URL}`);
  return {
    type:FETCH_CURRICULUMS,
    payload: response
  }
}

export  function  deleteCurriculums(id){
    const response =  axios.delete(`${URL}${id}`);
    return {
        type:FETCH_CURRICULUMS,
        payload: response
    }
}

export  function  postCurriculums(payload){
    const response =  axios.post(`${URL}`,payload);
    return {
        type:FETCH_CURRICULUMS,
        payload: response
    }
}

