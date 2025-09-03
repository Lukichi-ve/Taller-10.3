let contenedor = document.getElementById("contenedor");

document.addEventListener("DOMContentLoaded", ()=>{
    const items = JSON.parse(localStorage.getItem("items")) || [];
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = items.map(i =>`<li class="list-group-item">${i}</li>`).join("");
});

document.getElementById("agregar").addEventListener("click", ()=>{
    let texto = document.getElementById("item");
    const items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(texto.value);
    
    contenedor.innerHTML += `<li class="list-group-item">${texto.value}</li>`;
    localStorage.setItem("items", JSON.stringify(items));
    texto.value = "";  
});

document.getElementById("limpiar").addEventListener("click", ()=> {
    localStorage.clear();
    contenedor.innerHTML = "";
})

