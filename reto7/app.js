const button_buscar=document.querySelector("#button-addon2");
const urlGit="https://api.github.com/users/EmilyG20";
const cardUser=document.querySelector("#card-user");

const getUsers= async function(){
  const respuesta=await fetch(urlGit);
  const data= await respuesta.json();
  mostrarUser(data);
}

const mostrarUser=function(user){
cardUser.innerHTML=
`<img width=100px class="rounded-circle col-5" src=${user.avatar_url} alt="">
      <div class="col-7 ms-4">
        <h6>Nombre: ${user.name}</h6>
        <h6>Usuario: ${user.login}</h6>
        <h6>Repos: ${user.public_repos}</h6>
        <h6>Ubicación: ${user.location}</h6>
        <h6>Seguidores: ${user.followers}</h6>
        <h6>Seguidos: ${user.following}</h6>
      </div>
`;

}

button_buscar.addEventListener("click",getUsers);
