# Proyecto Eventos

API REST desarrollada con Node.js, Express y MongoDB para la gestión de eventos y usuarios.

Este proyecto forma parte de las entregas del curso Backend II de Coderhouse.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- JavaScript (ES Modules)
- dotenv
- bcrypt
- jsonwebtoken
- cookie-parser
- Nodemon

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/DevitisTomas/proyecto-eventos.git
```

Ingresar a la carpeta:

```bash
cd proyecto-eventos
```

Instalar dependencias:

```bash
npm install
```

Crear un archivo `.env` en la raíz del proyecto tomando como referencia `.env.example`.

Configurar las siguientes variables:

```env
PORT=3000
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
JWT_EXPIRES_IN=1h
```

Iniciar el servidor:

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`.

## Estructura del proyecto

```text
src/
├── config/
│   └── database.js
├── controllers/
│   └── sessions.controller.js
├── dao/
│   └── users.dao.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── User.js
├── repositories/
│   └── users.repository.js
├── routes/
│   ├── events.router.js
│   └── sessions.router.js
├── services/
│   └── sessions.service.js
├── utils/
│   ├── hash.js
│   └── jwt.js
├── app.js
└── server.js
```

## Funcionalidades

### Registro de usuarios

**POST** `/api/sessions/register`

Permite registrar usuarios con los siguientes datos:

```json
{
  "first_name": "Usuario",
  "last_name": "Prueba",
  "email": "usuario@example.com",
  "password": "Prueba123456"
}
```

Validaciones:
- Campos obligatorios.
- Formato de email.
- Contraseña de al menos 8 caracteres.
- No permite emails duplicados.
- Encriptación de contraseñas mediante bcrypt.
- El rol inicial se establece como `user`.

### Inicio de sesión

**POST** `/api/sessions/login`

Permite autenticar un usuario mediante email y contraseña.

```json
{
  "email": "usuario@example.com",
  "password": "Prueba123456"
}
```

Al iniciar sesión correctamente, genera un token JWT y lo almacena en una cookie llamada `currentUser`.

La cookie utiliza:
- `httpOnly: true`
- `sameSite: lax`
- `maxAge: 3600000`
- `secure: true` en producción.

### Usuario actual

**GET** `/api/sessions/current`

Permite consultar los datos del usuario autenticado.

Requiere una cookie JWT válida.

Respuesta:

```json
{
  "status": "success",
  "payload": {
    "id": "ID_DEL_USUARIO",
    "email": "usuario@example.com",
    "role": "user"
  }
}
```

### Cierre de sesión

**POST** `/api/sessions/logout`

Elimina la cookie `currentUser` y cierra la sesión.

Respuesta:

```json
{
  "status": "success",
  "message": "Sesión cerrada correctamente"
}
```

## Seguridad y autenticación

- Las contraseñas se almacenan encriptadas utilizando bcrypt.
- Los tokens se generan y verifican mediante jsonwebtoken.
- La autenticación se realiza mediante cookies HTTP.
- El middleware `auth.middleware.js` verifica la validez del token.
- Las variables sensibles se almacenan en `.env`, archivo excluido del repositorio.

## Pruebas realizadas

Se verificaron los siguientes casos utilizando Postman:

- Registro correcto de usuario.
- Inicio de sesión exitoso.
- Consulta del usuario autenticado.
- Cierre de sesión.
- Acceso rechazado después del logout.
- Rechazo de contraseña incorrecta.
- Rechazo de email inexistente.
- Rechazo de token inválido.

## Autor

Proyecto desarrollado para el curso Backend II - Coderhouse.