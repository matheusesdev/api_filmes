// Simula a API como uma função
function movieAPI() {
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

  return {
    listarFilmes: () => filmes,

    buscarFilmePorTitulo: titulo =>
      filmes.find(f =>
        f.titulo_filme.toLowerCase().includes(titulo.toLowerCase())
      ) || { mensagem: 'Filme não encontrado' },

    adicionarFilme: novoFilme => {
      novoFilme.id = filmes.length ? filmes[filmes.length - 1].id + 1 : 1;
      filmes.push(novoFilme);
      return { mensagem: 'Filme adicionado com sucesso!', filme: novoFilme };
    },
  };
}

// Instanciar a "API"
const api = movieAPI();

function pesquisarFilme() {
  const titulo = document.getElementById('search').value.trim();

  if (titulo === '') {
    alert('Por favor, digite o título do filme.');
    return;
  }

  const filme = api.buscarFilmePorTitulo(titulo);

  if (filme.mensagem) {
    document.getElementById('resultado').innerHTML = '<p>Filme não encontrado!</p>';
  } else {
    mostrarFilme(filme);
  }
}

function mostrarFilme(filme) {
  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <div class="filme-info">
      <h2>${filme.titulo_filme}</h2>
      <p><span>Idioma:</span> ${filme.idioma}</p>
      <p><span>Duração:</span> ${filme.duracao} minutos</p>
      <p><span>Ator Principal:</span> ${filme.ator_principal}</p>
    </div>
  `;
}
