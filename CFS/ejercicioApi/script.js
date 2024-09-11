"use stric";

async function obtenerData() {
    try {
        let response = await fetch("https://api.escuelajs.co/api/v1/products");
        let data = await response.json();
        return data;  
    } catch (err) {
        console.log(err);
    }
}

async function mostrarData() {
    let data = await obtenerData();  
    let div = document.querySelector("div");  
    data.forEach(data => {
        div.innerHTML += `<h1>${data.title}</h1>
                          <h2>Precio: ${data.price}</h2>`;
    });
}

mostrarData();
