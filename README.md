
# Plataforma de Eventos e Inscripciones

API REST desarrollada con Node.js y Express para una plataforma de gestión de eventos e inscripciones.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript (ES Modules)
- dotenv

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
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

Configurar las siguientes variables:

```env
PORT=3000
NODE_ENV=development
MONGO_URL=mongodb://127.0.0.1:27017/proyecto-eventos
JWT_SECRET=clave_local_desarrollo
```

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
│   ├── controllers/
│   ├── dao/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
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
| GET | `/api/sessions` | Ruta inicial de sesiones |

## Estado del proyecto

Proyecto correspondiente a la primera preentrega del curso Backend II. Se encuentra desarrollada la estructura inicial de la API REST, con separación de responsabilidades mediante rutas y controladores.
