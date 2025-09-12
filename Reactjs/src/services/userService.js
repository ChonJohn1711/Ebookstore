import axios from "../axios";

const handleSigninAPI = async (userPhonenumber, userPassword) => {
    return axios.post('/api/signin', { phonenumber: userPhonenumber, password: userPassword });
}

const getAllUsersAPI = async (inputId) => {
    return axios.get(`api/get-all-users?id=${inputId}`)
}

const createNewUserAPI = async (data) => {
    console.log('check data from service: ', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserAPI = async (id) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: id
        }
    });
};

const editUserAPI = async (data) => {
    return axios.put('/api/edit-user', data)
}

export {
    handleSigninAPI,
    getAllUsersAPI,
    createNewUserAPI,
    deleteUserAPI,
    editUserAPI
}