import axios from '../axios';
import * as queryString from 'query-string';

const adminService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    signin(signinBody) {
        return axios.post(`/admin/signin`, signinBody)
    },

};

export default adminService;