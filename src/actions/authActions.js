import axios from 'axios';
import { SET_CURRENT_USER } from '../actions';
import setAuthorizationToken from '../utils/setAutorizationToken';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data) {
    return dispatch => {
        return axios.post('http://localhost:64729/api/auth', data)
        .then(res => {
            const token=res.data.token;
            console.log('--get token serve--',token);
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
        });
    }
}
export function register(data) {
    return dispatch => {
        return axios.post('http://localhost:64729/api/account/register',data);
    }
}