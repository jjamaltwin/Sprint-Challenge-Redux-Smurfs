import axios from 'axios';


export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';
export const GET_SMURFS = 'GET_SMURFS';


// Adding Smurf 

export const addSmurf = (addedSmurf) => {
  return (dispatch) => {
    dispatch({type: FETCHING});
    axios
      .post(`http://localhost:3333/smurfs`, addedSmurf)
      .then(response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, error: `Sorry! We could not add the Smurf!`})
      });

  }
}

// Request action 

export const getSmurfs = () => {
  return (dispatch) => {
    dispatch({type: FETCHING});
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({type: GET_SMURFS, smurfs: response.data})
      })
      .catch(err => {
        dispatch({type: ERROR, error: 'Sorry having some issues loading Smurf, try again!'})
      });
  }
}


