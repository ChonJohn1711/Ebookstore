import bcrypt from "bcryptjs";
import db from '../models/index'

const salt = bcrypt.genSaltSync(10);

let createUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Users.create({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phonenumber: data.phonenumber,
                password: hashPasswordFromBcrypt,
                address: data.address,
                gender: data.gender,
                roleId: data.roleId,
            })
            resolve('Create user succeeded!!!!!')
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createUser: createUser,
}