import prisma from "../lib/prisma.js";

export const listarAlunos = async (req, res) => {
  const alunos = await prisma.aluno.findMany();
  res.json(alunos);
};

export const criarAluno = async (req, res) => {
  const { nome, email } = req.body;
  const aluno = await prisma.aluno.create({
    data: { nome, email }
  });
  res.json(aluno);
};
