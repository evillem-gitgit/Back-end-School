const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Servidor está rodando ok!")
})

const studentsRoutes = require('./routes/studentRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js');

app.use('/student', studentsRoutes);
app.use('/teacher', teacherRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})

