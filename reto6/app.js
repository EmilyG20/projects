const container=document.querySelector(".container");

const urlmovies="https://www.omdbapi.com/?s=avengers&apikey=4b229795&";
const getMovies= async function(){
  const respuesta=await fetch(urlmovies);
  const data= await respuesta.json();
  mostrarPeli(data.Search)
}
getMovies();
const mostrarPeli= function(pelis){
  container.innerHTML="";
  pelis.forEach(peli => {
    container.innerHTML+=`<div class="card"> 
    <img src=${peli.Poster}>
    <h2>${peli.Title}</h2>
    <p>Año: ${peli.Year}</p>
    <p>Sinopsis: Esta es la sinopsis</p>
    </div>`
  });
}