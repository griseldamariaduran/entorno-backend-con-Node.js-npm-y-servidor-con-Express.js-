import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

// 1. Array de estudiantes actualizado con base en la imagen
let students = [
  {
    id: 1,
    name: "Juan Perez",
    age: 20,
    major: "Ingeniería en Sistemas",
    email: "juan.perez@example.com",
    address: "Calle 22 de Abril, Ciudad San Salvador"
  },
  {
    id: 2,
    name: "Ana Gomez",
    age: 22,
    major: "Diseño Gráfico",
    email: "ana.gomez@example.com",
    address: "Avenida Siempre Viva 456, Ciudad San Vicente"
  },
  {
    id: 3,
    name: "Carlos Lopez",
    age: 21,
    major: "Administración de Empresas",
    email: "carlos.lopez@example.com",
    address: "Boulevard de los Sueños  789, Ciudad San Miguel"
  },
  {
    id: 4,
    name: "Maria Fernandez",
    age: 23,
    major: "Arquitectura",
    email: "maria.fernandez@example.com",
    address: "Calle de la Esperanza 101, Ciudad Santa Ana"
  },
  {
    id: 5,
    name: "Luis Martinez",
    age: 24,
    major: "Psicología",
    email: "luis.martinez@example.com",
    address: "Avenida de la Paz 202, Ciudad San Salvador"
  }
];

// GET all
app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});

// GET by id
app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.status(200).json(student);
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

// POST (Actualizado para recibir email y address)
app.post('/api/students', (req, res) => {
    // Agregamos email y address a la desestructuración
    const { name, age, major, email, address } = req.body;

    const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;

    // Incluimos los nuevos campos al crear el objeto
    const newStudent = { id: newId, name, age, major, email, address };
    students.push(newStudent);

    res.status(201).json({ message: "Estudiante agregado con éxito", student: newStudent });
});

// PUT (Actualizado para recibir email y address)
app.put('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    // Agregamos email y address a la desestructuración
    const { name, age, major, email, address } = req.body;

    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex !== -1) {
        // Incluimos los nuevos campos al actualizar el objeto
        students[studentIndex] = { id: studentId, name, age, major, email, address };
        res.status(200).json({ message: "Estudiante actualizado con éxito", student: students[studentIndex] });
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

// DELETE
app.delete('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const studentIndex = students.findIndex(s => s.id === studentId);

    if (studentIndex !== -1) {
        const deletedStudent = students.splice(studentIndex, 1);
        res.status(200).json({ message: "Estudiante eliminado con éxito", student: deletedStudent[0] });
    } else {
        res.status(404).json({ message: "Estudiante no encontrado" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});