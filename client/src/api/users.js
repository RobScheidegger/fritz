import API from './api'

export const getUser = async (userId) => API.get(`/users/${userId}`);
export const signIn = async (params) => {
    const {user, token} = API.post(`/users/signin`, params);
    localStorage.setItem('authenticationToken', token );
    return user;
};
export const createUser = async(user) => API.post('/users/create', user);