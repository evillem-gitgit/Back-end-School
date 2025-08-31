const { PrismaClient } = require("@prisma/client");
const prismas = new PrismaClient();

async function GET(req, res) {
    const studantes = await prismas.Studant.findMany();
    res.json(Studant);
}

async function SET(req, res) {
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

async function UPDATE(req, res) {
    const id = parseInt(req.params.id);
    const { nome, email} = req.body;

    try{
        const updateStudants = await prisma.Studant.update({
            where: { id },
            data: { ...(nome && {nome}), ...(email && { email }) }
        });
        res.json(updateStudant);
    } catch (err) {
        res.status(404).json({ erro: 'Aluno não encontrado'});
    }
}

async function DELETE(res, req){
    const id = ParseInt(req.params.id);

    try{
        await prisma.Studant.delete({ where: { id } });
        res.json({ message: 'Aluno exluído com sucesso' });
    } catch (err) {
        res.status(404).json({ error: 'Aluno não encontrado'});
    }
}

module.exports = {GET, SET, UPDATE, DELETE}