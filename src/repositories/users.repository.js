import usersDao from "../dao/users.dao.js";

const findByEmail = async (email) => {
    return await usersDao.findByEmail(email);
};

const createUser = async (userData) => {
    return await usersDao.create(userData);
};

export default {
    findByEmail,
    createUser
};