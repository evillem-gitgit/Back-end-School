import express from "express";
import alunoRoutes from "./routes/alunoRoutes.js";
import professorRoutes from "./routes/professorRoutes.js";

const app = express();
app.use(express.json());

// rotas
app.use("/alunos", alunoRoutes);
app.use("/professores", professorRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
