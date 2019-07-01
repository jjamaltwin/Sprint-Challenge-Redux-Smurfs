import { FETCHING, GET_SMURFS, ERROR } from '../actions';


const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCHING:
      return Object.assign({}, state, {fetchingSmurfs: true})
    case GET_SMURFS:
      return Object.assign({}, state, {fetchingSmurfs: false, error: '', smurfs: action.smurfs})
    case ERROR: 
      return Object.assign({}, state, {fetchingSmurfs: false, error: action.error})
    default:
      return state
  } 
}

export default reducer;
