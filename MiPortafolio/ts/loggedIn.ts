import { getUsers } from "./users";

export default function(){
    if(!localStorage.userName)
        return;

    document.getElementById('loginContainer')!.innerHTML = `<span>Hola, ${getUsers()[0].userName}</span>`;
    document.getElementById('addGalleryItemButtonContainer')!.innerHTML = `<button class="btn btn-primary btn-block">Agregar foto</button>
                                                                            <button id="closeSessionButton" class="btn btn-danger btn-block">Cerrar sesión</button>`;

    $('#closeSessionButton').click(function(e){
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    })
}