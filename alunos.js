const ALUNOS = [
  {
    nome: "Pedro Paulo",
    matricula: "20210001",
    media: 8.5,
  },
  {
    nome: "Ana Maria",
    matricula: "20210002",
    media: 7.2,
  },
  {
    nome: "João Pedro",
    matricula: "20210003",
    media: 9.0,
  },
  {
    nome: "Maria Luiza",
    matricula: "20210004",
    media: 6.5,
  },
];

function filtrarPorNome(nome) {
  return ALUNOS.filter((aluno) =>
    aluno.nome.toLowerCase().includes(nome.toLowerCase())
  );
}

function filtrarPorMedia(media) {
  return ALUNOS.filter((aluno) => aluno.media >= media);
}

module.exports = {
  filtrarPorNome,
  filtrarPorMedia,
  ALUNOS,
};
