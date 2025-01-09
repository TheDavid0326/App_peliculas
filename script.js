const API_KEY = "";
const token = "";
const API_URL= 'https://api.themoviedb.org/3/search/movie'
const IMG_URL = 'https://image.tmdb.org/t/p/w200'

//Relacionar con elementos del DOM
const searchButton=document.getElementById('searchButton');
const results=document.getElementById('results');

//Evento click en searchButton
searchButton.addEventListener('click', ()=> {
    results.innerHTML='Cargando...';
    let inputText= document.getElementById('searchInput').value;
     fetch(`${API_URL}?api_key=${API_KEY}&query=${inputText}`)
     .then(response => response.json()) 
     .then(response => { 
        console.log(response); // Imprime la respuesta por consola 
        showMovies(response.results); // Llama a la función showMovies 
     }) 
     .catch(error => console.error('Error al obtener los datos de la película:', error)); 
    });

function showMovies(movies){
    results.innerHTML='';

    if (movies.length==0){
        results.innerHTML='<p>No se encontraron resultados </p>';
    } else {

    movies.forEach(movie => {
        let divMovie=document.createElement('div');
        divMovie.classList.add('movie');

        let title=document.createElement('h2');
        title.textContent=movie.title;

        let releaseDate=document.createElement('p');
        releaseDate.textContent=`La fecha de lanzamiento es: ${movie.release_date}`;

        let overview=document.createElement('p');
        overview.textContent=movie.overview;

        let poster=document.createElement('img');
        poster.src=`${IMG_URL}${movie.poster_path}`;

        divMovie.appendChild(poster);
        divMovie.appendChild(title);
        divMovie.appendChild(releaseDate);
        divMovie.appendChild(overview);
        
        
        results.appendChild(divMovie);
    })
    }
}


