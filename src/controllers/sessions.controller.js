import sessionsService from "../services/sessions.service.js";
import { generateToken } from "../utils/jwt.js";

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

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await sessionsService.loginUser(email, password);
        const token = generateToken(user);

        res.cookie("currentUser", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 3600000,
            secure: process.env.NODE_ENV === "production"
        });

        res.status(200).json({
            status: "success",
            message: "Inicio de sesión exitoso"
        });
    } catch (error) {
        res.status(401).json({
            status: "error",
            message: "Credenciales inválidas"
        });
    }
};

export const current = (req, res) => {
    res.status(200).json({
        status: "success",
        payload: {
            id: req.user.id,
            email: req.user.email,
            role: req.user.role
        }
    });
};

export const logout = (req, res) => {
    res.clearCookie("currentUser", {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production"
    });

    res.status(200).json({
        status: "success",
        message: "Sesión cerrada correctamente"
    });
};