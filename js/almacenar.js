let contenedor = document.getElementById("contenedor"); //Donde se crea la lista
const items = JSON.parse(localStorage.getItem("items")) || []; //Array donde se toman los elementos guardados en localStorage

document.addEventListener("DOMContentLoaded", ()=>{ //Al cargar el DOM se ingresan al HTML los elementos ya guardados en localStorage.
    contenedor.innerHTML = items.map(i =>`<li class="list-group-item">${i}</li>`).join("");
});

function agregarALista(){ // Función para agregar los items ingresados a la lista y guardarlos en localStorage
    let texto = document.getElementById("item");
    
    if(!texto.value.trim() < 1){
        items.push(texto.value);
        contenedor.innerHTML += `<li class="list-group-item">${texto.value}</li>`;
        localStorage.setItem("items", JSON.stringify(items));
    }
    texto.value = "";   
}

document.getElementById("agregar").addEventListener("click", agregarALista); // Al hacer click se agrega a la lista el elemento ingresado.

document.getElementById("item").addEventListener("keydown", (event) => { // Al hacer Enter se agrega a la lista el elemento ingresado.
    if (event.key === "Enter") {
        agregarALista();
    }
});

document.getElementById("limpiar").addEventListener("click", ()=> { // Se limpia el localStorage, el array "items" y la lista creada.
    localStorage.removeItem('items');
    items.splice(0, items.length);
    contenedor.innerHTML = "";    
})

