const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 
app.use(express.json());

// lista de todos os filmes
let filmes = [
  {
    id: 1,
    titulo_filme: 'Parasita',
    idioma: 'Coreano',
    duracao: 132,
    ator_principal: 'Song Kang-ho'
  },
  {
    id: 2,
    titulo_filme: 'A Vida é Bela',
    idioma: 'Italiano',
    duracao: 116,
    ator_principal: 'Roberto Benigni'
  },
  {
    id: 3,
    titulo_filme: 'O Fabuloso Destino de Amélie Poulain',
    idioma: 'Francês',
    duracao: 122,
    ator_principal: 'Audrey Tautou'
  },
  {
    id: 4,
    titulo_filme: 'Cidade de Deus',
    idioma: 'Português',
    duracao: 130,
    ator_principal: 'Alexandre Rodrigues'
  },
  {
    id: 5,
    titulo_filme: 'O Labirinto do Fauno',
    idioma: 'Espanhol',
    duracao: 118,
    ator_principal: 'Ivana Baquero'
  },
  {
    id: 6,
    titulo_filme: 'O Artista',
    idioma: 'Inglês',
    duracao: 100,
    ator_principal: 'Jean Dujardin'
  },
  {
    id: 7,
    titulo_filme: 'Intocáveis',
    idioma: 'Francês',
    duracao: 112,
    ator_principal: 'François Cluzet'
  },
  {
    id: 8,
    titulo_filme: 'Rashomon',
    idioma: 'Japonês',
    duracao: 88,
    ator_principal: 'Toshiro Mifune'
  },
  {
    id: 9,
    titulo_filme: 'Roma',
    idioma: 'Espanhol',
    duracao: 135,
    ator_principal: 'Yalitza Aparicio'
  },
  {
    id: 10,
    titulo_filme: 'O Tigre e o Dragão',
    idioma: 'Mandarim',
    duracao: 120,
    ator_principal: 'Chow Yun-fat'
  }
];

// mostrar todos os filmes
app.get('/filmes', (req, res) => {
  res.json(filmes);
});

// buscar um filme pelo id
app.get('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const filme = filmes.find(f => f.id === id);
  if (filme) {
    res.json(filme);
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});

// adicionar filme 
app.post('/filmes', (req, res) => {
  const novoFilme = req.body;
  novoFilme.id = filmes.length ? filmes[filmes.length - 1].id + 1 : 1;
  filmes.push(novoFilme);
  res.status(201).json({ mensagem: 'Filme adicionado com sucesso!', filme: novoFilme });
});

// Att filme
app.put('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);
  if (index !== -1) {
    filmes[index] = { ...filmes[index], ...req.body };
    res.json({ mensagem: 'Filme atualizado com sucesso!', filme: filmes[index] });
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});

// Metodo para deletar
app.delete('/filmes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);
  if (index !== -1) {
    const filmeRemovido = filmes.splice(index, 1);
    res.json({ mensagem: 'Filme removido com sucesso!', filme: filmeRemovido });
  } else {
    res.status(404).json({ mensagem: 'Filme não encontrado' });
  }
});


app.listen(port, () => {
  console.log(`API de Filmes rodando em http://localhost:${port}`);
});
