const alunosModule = require("./alunos.js");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/alunos", (req, res) => {
  let alunos = alunosModule.ALUNOS;
  if (req.query.nome) {
    const nome = req.query.nome;
    alunos = alunosModule.filtrarPorNome(nome);
  }
  if (req.query.media) {
    const media = req.query.media;
    alunos = alunosModule.filtrarPorMedia(media);
  }

  res.send(alunos);
});

app.post("/alunos/novo", (req, res) => {
  const { nome, media, matricula } = req.body;
  if (!nome || !matricula || !media) {
    res.status(400);
    res.send("Dados Invalidos");
  } else {
    res.send("ok");
  }
});
app.post("/alunos/deletar/:index", (req, res) => {
  const index = req.params.index;
  if (index < alunosModule.ALUNOS.length) {
    res.send("ok");
  } else {
    res.status(404);
    res.send("Aluno nao encontrado");
  }
});
app.post("/alunos/atualizar/:index", (req, res) => {
  const index = req.params.index;
  if (index < alunosModule.ALUNOS.length) {
    const { nome, media, matricula } = req.body;
    if (!!nome){
      alunosModule.ALUNOS[index].nome=nome;
    }
    if (!!media){
      alunosModule.ALUNOS[index].media=media;
    }
    if (!!matricula){
      alunosModule.ALUNOS[index].matricula=matricula;
    }
    res.send("aluno atualizado");
  } else {
    res.status(404);
    res.send("Aluno nao encontrado");
  }
});
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
