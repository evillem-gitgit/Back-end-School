const { PrismaClient } = require("@prisma/client");
const prismas = new PrismaClient();

async function List(req, res) {
    const studantes = await prismas.Studant.findMany();
    res.json(studantes);
}

async function Create(req, res) {
    const { id, nome, email, idade} = req.body;

    try{
        const newStudant = await prismas.Studant.create({
            data: {
                nome,
                email,
                idade: parseInt(idade)
            }
        });
        res.status(201).jason(newStudant);
    } catch (err) {
        if (err.code === 'P2002') {
            return res.status(409).json({error: 'Email ja cadastrado'});
        }
        res.status(500).json({ error: 'Erro criando aluno'})
    }
}

async function Update(req, res) {
    const id = parseInt(req.params.id);
    const { nome, email} = req.body;

    try{
        const updateStudants = await prismas.Studant.update({
            where: { id },
            data: { ...(nome && {nome}), ...(email && { email }) }
        });
        res.json(updateStudants);
    } catch (err) {
        res.status(404).json({ erro: 'Aluno não encontrado'});
    }
}

async function Delete(res, req){
    const id = ParseInt(req.params.id);

    try{
        await prismas.Studant.delete({ where: { id } });
        res.json({ message: 'Aluno exluído com sucesso' });
    } catch (err) {
        res.status(404).json({ error: 'Aluno não encontrado'});
    }
}

module.exports = {List, Create, Update, Delete}