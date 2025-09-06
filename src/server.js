const express = require("express");
const app = express();
const PORT = 5432;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Servidor está rodando ok!")
})

const studentsRoutes = require('./routes/studentRoutes.js');
const teacherRoutes = require('./routes/teacherRoutes.js');

app.use('/studentRoutes', studentsRoutes);
app.use('/teacherRoutes', teacherRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em https://localhost:${PORT}`)
})

