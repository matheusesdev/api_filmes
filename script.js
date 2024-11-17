function pesquisarFilme() {
    const titulo = document.getElementById('search').value.trim();
  
    if (titulo === "") {
      alert("Por favor, digite o título do filme.");
      return;
    }
  
    fetch(`http://localhost:3000/filmes?titulo_filme=${titulo}`)
      .then(response => response.json())
      .then(data => {
        if (data.length === 0) {
          document.getElementById('resultado').innerHTML = '<p>Filme não encontrado!</p>';
        } else {
          mostrarFilme(data[0]);
        }
      })
      .catch(error => {
        document.getElementById('resultado').innerHTML = '<p>Erro ao buscar o filme. Tente novamente mais tarde.</p>';
        console.error(error);
      });
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
