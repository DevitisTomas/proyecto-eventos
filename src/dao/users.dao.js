
import User from "../models/User.js";

const findByEmail = async (email) => {
    return await User.findOne({ email });
};

const create = async (userData) => {
    return await User.create(userData);
};

export default {
    findByEmail,
    create
};
