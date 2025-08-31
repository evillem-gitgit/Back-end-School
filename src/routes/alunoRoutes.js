import express from "express";
import { listarAlunos, criarAluno } from "../controllers/alunoController.js";

const router = express.Router();

router.get("/", listarAlunos);
router.post("/", criarAluno);

export default router;
