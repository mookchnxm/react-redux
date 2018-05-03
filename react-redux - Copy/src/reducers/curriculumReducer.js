import { FETCH_CURRICULUMS, CHANGE_CURRICULUMS } from '../actions';

const initalState = {
  curriculumsList: [],
};

export default (state=initalState,action) => {
  switch (action.type){
    case CHANGE_CURRICULUMS:
      return state,action.payload;
    case FETCH_CURRICULUMS:
      return {...state,curriculumsList:action.payload.data};
    default:
      return state;
  }
}
