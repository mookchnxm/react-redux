import {combineReducers} from 'redux'
import curriculums from './curriculumReducer';

const rootReducers = combineReducers({
  curriculums,
});
export default  rootReducers;
