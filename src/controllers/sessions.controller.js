import sessionsService from "../services/sessions.service.js";

export const getSessions = (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Ruta de sessions preparada"
    });
};

export const register = async (req, res) => {
    try {
        const newUser = await sessionsService.registerUser(req.body);

        res.status(201).json({
            status: "success",
            payload: {
                id: newUser._id,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                role: newUser.role
            }
        });
    } catch (error) {
        res.status(error.statusCode || 400).json({
            status: "error",
            message: error.message
        });
    }
};