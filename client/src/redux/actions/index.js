import axios from 'axios';

export const GET_ALL_USERS = 'GET_ALL_USERS'
export const GET_USER_DETAIL = 'GET_USER_DETAIL'
export const CREATE_USER = 'CREATE_USER'
export const SEARCH_USER = 'SEARCH_USER'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const getAllUsers = () => {
    return async function (dispatch){
        return axios.get('http://localhost:3001/users')
        .then(response => dispatch({type: GET_ALL_USERS, payload: response.data}))
        .catch(err => console.error(err))
    }
}

export const getUserDetail = (id) => {
    return async function(dispatch){
        return axios.get(`http://localhost:3001/users/${id}`)
        .then(response => dispatch({type: GET_USER_DETAIL, payload: response.data}))
        .catch(err => console.error(err))
    }
}

export const createUser = (payload) => {
    return async function(dispatch){
        return axios.post(`http://localhost:3001/users`, payload)
        .then(response => dispatch({type: CREATE_USER, payload: response}))
        .catch(err => console.error(err))
    }
}

export const updateUser = (id, payload) => {
    return async function(dispatch){
        return axios.patch(`http://localhost:3001/users/${id}`, payload)
        .then(response => dispatch({type: UPDATE_USER, payload: response}))
        .catch(err => console.error(err))
    }
}

export const searchUserByName = (name) => {
    return async function(dispatch){
        return axios.get(`http://localhost:3001/users?name=${name}`)
        .then(response => dispatch({type: SEARCH_USER, payload: response.data}))
        .catch(err => console.error(err))
    }
}

export const deleteUser = (id) => {
    return async function(dispatch){
      return axios.delete(`http://localhost:3001/users/${id}`)
      .then(response => dispatch({type: DELETE_USER, payload:response.data}))
      .catch(err => console.error(err))
    }
  };