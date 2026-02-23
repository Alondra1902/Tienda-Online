const productos = [
    { nombre: "Laptop Gamer", precio: 15000, imagen: "img/laptop.jpg" },
    { nombre: "Iphone 15", precio: 20000, imagen: "img/Iphone 15.jpg" },
    { nombre: "nothing ear 3", precio: 2800, imagen: "img/nothing.jpg" },
    { nombre: "galaxy tab s10", precio: 10000, imagen: "img/galaxy.jpg" },
    { nombre: "samsung galaxy watch 4", precio: 6000, imagen: "img/watch4.jpg" },

    { nombre: "Paris Saint-Germain", precio: 999, imagen: "img/playera paris saint.jpg" },
    { nombre: "Pantalon Jeans Boot Cut Lee Mujer", precio: 800, imagen: "img/pantalon jeans.jpg" },
    { nombre: "Chaqueta Ghost Rider", precio: 3500, imagen: "img/chaqueta.jpg" },
    { nombre: "Sudadera Calvin Klein Monograma Hombre Azul", precio: 1200, imagen: "img/sudadera.jpg" },
    { nombre: "Tenis Skate Sk8-Hi", precio: 1700, imagen: "img/tenis vans.jpg" },

    { nombre: "Gorra New York Yankees Authentic Collection", precio: 900, imagen: "img/gorra.jpg" },
    { nombre: "Mochila Para Laptop Hombre Escolares Reforzada Backpack", precio: 250, imagen: "img/mochila.jpg" },
    { nombre: "Cinturón para caballero Vukovar06 | CJ1V13", precio: 1200, imagen: "img/cinturon.jpg" },
    { nombre: "Lentes de Sol Ray Ban RB3447 Round Dorado", precio: 3300, imagen: "img/lentes.jpg" },
    { nombre: "Reloj Casio GW-6900U-1", precio: 3800, imagen: "img/reloj casio.jpg" }
];

const buscador = document.getElementById("buscador");
const resultados = document.getElementById("resultados");
const mensaje = document.getElementById("mensajeBusqueda");

buscador.addEventListener("input", function() {

    const texto = this.value.toLowerCase();
    resultados.innerHTML = "";

    const filtrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(texto)
    );

    if (filtrados.length === 0) {
        mensaje.textContent = "No se encontraron productos.";
        return;
    }

    mensaje.textContent = "";

    filtrados.forEach(producto => {
        resultados.innerHTML += `
            <div class="producto">
                <img src="${producto.imagen}">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
            </div>
        `;
    });
});