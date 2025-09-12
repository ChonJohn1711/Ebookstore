import CRUDservice from '../services/CRUDservice'
import db from "../models/index";

let getHomePage = (req, res) => {
    return res.render("homepage.ejs")
}

let getDatabase = async (req, res) => {
    try {
        let data = await db.Users.findAll();
        return res.render("database.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('CRUD.ejs')
}

let postCRUD = async (req, res) => {
    await CRUDservice.createUser(req.body);
    return res.send('Create user succeeded!!!!!')
}

module.exports = {
    getHomePage: getHomePage,
    getDatabase: getDatabase,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}