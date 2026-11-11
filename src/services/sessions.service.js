import usersRepository from "../repositories/users.repository.js";
import hashPassword from "../utils/hash.js";

const registerUser = async (userData) => {
    const { first_name, last_name, email, password } = userData;

    if (!first_name || !last_name || !email || !password) {
        throw new Error("Faltan campos obligatorios");
    }

    const normalizedEmail = email.trim().toLowerCase();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(normalizedEmail)) {
        throw new Error("El email no es válido");
    }

    if (password.length < 8) {
        throw new Error("La contraseña debe tener al menos 8 caracteres");
    }

    const existingUser = await usersRepository.findByEmail(normalizedEmail);

    if (existingUser) {
        const error = new Error("El email ya está registrado");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await usersRepository.createUser({
        first_name,
        last_name,
        email: normalizedEmail,
        password: hashedPassword,
        role: "user"
    });

    return newUser;
};

export default {
    registerUser
};