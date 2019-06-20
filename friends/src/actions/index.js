import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const getData = () => dispatch => {
    dispatch({ type: LOGIN })
    axios
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log("action", res)
            dispatch({ type: LOGIN_SUCCESS, payload: res.data})
            
        })
         
        .catch(err => dispatch({ type: LOGIN_ERROR, payload: err}))
}