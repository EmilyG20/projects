const urlGit="https://api.github.com/users/EmilyG20/repos";
const cardUser=document.querySelector("#card-repo");

const getUsers= async function(){
  const respuesta=await fetch(urlGit);
  const data= await respuesta.json();
 mostrarRepo(data);
}

const mostrarRepo=function(repos){
  cardUser.innerHTML="";
  repos.forEach(repo => {
    cardUser.innerHTML+=
`      <div class="ms-4 card-body rounded bg-info m-3 p-3">
        <h6>Nombre: ${repo.name}</h6>
        <h6>link del repo: ${repo.html_url}</h6>
        <h6>Visibilidad: ${repo.visibility}</h6>
        <h6>Fecha de creación: ${repo.created_at}</h6>
        <h6>Descripción: ${repo.description}</h6>
      </div>
`;
  });


}
getUsers();
