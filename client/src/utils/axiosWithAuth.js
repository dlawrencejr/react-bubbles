import axios from 'axios'

export const getToken = () => localStorage.getItem('token');
export const setToken = token => localStorage.setItem('token',token);
export const deleteToken = () => localStorage.removeItem('token');


export default function axiosWithAuth(){
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: getToken()
        }
    });
}