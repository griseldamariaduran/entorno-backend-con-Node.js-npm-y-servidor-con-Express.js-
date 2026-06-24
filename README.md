# entorno-backend-con-Node.js-npm-y-servidor-con-Express.js-
Configuración del entorno backend con Node.js/npm y construcción del primer servidor con Express.js que responde peticiones HTTP.
# API REST- Administración de Estudiantes

Este es el primer servidor backend construido con Node.js y Express.js. Gestiona una lista de estudiantes utilizando datos en memoria (hardcoded array), respondiendo a peticiones HTTP y devolviendo datos en formato JSON.

## Cómo ejecutar el proyecto

1. Clona este repositorio en tu computadora.
2. Abre la terminal en la carpeta del proyecto.
3. Ejecuta `npm install` para instalar Express.
4. Ejecuta `node index.js` para levantar el servidor.
5. El servidor estará escuchando en `http://localhost:3000`.

## Endpoints Disponibles

| Método HTTP | Ruta                  | Descripción                              | Body requerido (JSON)          |
|-------------|-----------------------|------------------------------------------|--------------------------------|
| GET         | `/api/students`       | Obtiene la lista de todos los estudiantes| No                             |
| GET         | `/api/students/:id`   | Obtiene un estudiante específico por ID  | No                             |
| POST        | `/api/students`       | Agrega un nuevo estudiante               | Sí (`name`, `age`, `major`)    |
| PUT         | `/api/students/:id`   | Actualiza un estudiante existente por ID | Sí (`name`, `age`, `major`)    |
| DELETE      | `/api/students/:id`   | Elimina un estudiante por ID             | No                             |
