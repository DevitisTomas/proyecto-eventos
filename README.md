# Plataforma de Eventos e Inscripciones

API REST desarrollada con Node.js, Express y MongoDB para una plataforma de gestión de eventos e inscripciones.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- MongoDB Atlas
- Mongoose
- dotenv
- bcrypt

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/DevitisTomas/proyecto-eventos.git
```

Ingresar a la carpeta del proyecto:

```bash
cd proyecto-eventos
```

Instalar las dependencias:

```bash
npm install
```

## Configuración del entorno

Crear un archivo `.env` en la raíz del proyecto tomando como referencia el archivo `.env.example`.

Configurar las siguientes variables con los datos correspondientes:

```env
PORT=3000
NODE_ENV=development
MONGO_URL=
JWT_SECRET=
```

**Importante:** No compartir ni subir el archivo `.env` al repositorio, ya que contiene información privada de conexión y configuración.

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Para iniciar el servidor:

```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Estructura del proyecto

```text
proyecto-eventos/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── sessions.controller.js
│   ├── dao/
│   │   └── users.dao.js
│   ├── middlewares/
│   ├── models/
│   │   └── User.js
│   ├── repositories/
│   │   └── users.repository.js
│   ├── routes/
│   │   └── sessions.router.js
│   ├── services/
│   │   └── sessions.service.js
│   ├── utils/
│   │   └── hash.js
│   ├── app.js
│   └── server.js
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Rutas disponibles

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/health` | Verifica el estado del servidor |
| GET | `/api/events` | Obtiene el listado de eventos |
| GET | `/api/sessions` | Consulta la ruta inicial de sesiones |
| POST | `/api/sessions/register` | Registra un nuevo usuario |

## Registro de usuarios

El registro se realiza mediante:

`POST /api/sessions/register`

Ejemplo del cuerpo de la solicitud (JSON):

```json
{
    "first_name": "Ana",
    "last_name": "Perez",
    "email": "ana@mail.com",
    "password": "Secreta123"
}
```

### Validaciones implementadas

- Todos los campos son obligatorios.
- Se valida el formato del email.
- Se normaliza el email a minúsculas.
- No se permite registrar emails duplicados.
- La contraseña debe tener al menos 8 caracteres.
- Las contraseñas se encriptan utilizando bcrypt antes de almacenarse.
- El rol se asigna automáticamente como `user`, evitando que el usuario pueda establecer privilegios desde el registro.
- La respuesta no expone la contraseña.

### Respuestas del endpoint

- `201 Created`: usuario registrado correctamente.
- `400 Bad Request`: datos incompletos o inválidos.
- `409 Conflict`: el email ya se encuentra registrado.

## Estado del proyecto

Proyecto correspondiente a la segunda preentrega del curso Backend II.

Se implementó el registro de usuarios con persistencia en MongoDB Atlas, utilizando Mongoose y una arquitectura organizada en DAO, Repository, Service, Controller y Router.

También se incorporó el cifrado de contraseñas mediante bcrypt y validaciones para garantizar un registro seguro de usuarios.