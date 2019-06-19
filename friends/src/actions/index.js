import axios from 'axios'

export const FETCH_DATA_START = 'FETCH_DATA_START'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START })
    axios
        .get(`/api/friends`)
        .then(res => {
            console.log("action", res)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data})
            
        })
         
        .catch(err => dispatch({ type: FETCH_DATA_ERROR, payload: err}))
}