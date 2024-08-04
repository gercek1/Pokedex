import './styles/index.scss';
import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon"
const contenedor = document.querySelector(".main")
const footter = document.querySelector(".footer")

const getPokemons = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data.results
    } catch (error) {
        console.error("Error", error);
        return null;
    }
}


const obtenerUrlPokemons = async (listaPokemon) => {
    const detallesPokemons = [];
    try {
        if (listaPokemon) {
            for (const pokemon of listaPokemon) {
                const response = await axios.get(pokemon.url);

                detallesPokemons.push({
                    id: response.data.id,
                    nombre: pokemon.name,
                    imagen: response?.data.sprites.other.home.front_default || null,
                })
            }
        }

    } catch (error) {
        console.error("Error", error);

    } finally {
        return detallesPokemons;
    }
}



function pintarPokemonesMain(pokemons, contenedor) {
    pokemons.forEach((element, index) => {
        if (index === 0) {
            const card = document.createElement("article");
            const card2 = document.createElement("article");
            const figure = document.createElement("figure");
            const imagen = document.createElement("img");
            const h2 = document.createElement("h2");

            h2.textContent = element.nombre;
            imagen.setAttribute("src", element.imagen)
            card.classList.add("card");

            card.appendChild(h2);
            figure.appendChild(imagen);
            card.appendChild(figure);
            contenedor.appendChild(card);

            return;
        }
    });

}

function pintarPokemonesFooter(pokemons, contenedor) {
    let count = 0;
    let maxPokemon = 4;
    pokemons.forEach((element) => {
        if (count < maxPokemon) {
            const card = document.createElement("article");
            const card2 = document.createElement("article");
            const figure = document.createElement("figure");
            const imagen = document.createElement("img");
            const h2 = document.createElement("h2");

            h2.textContent = element.nombre;
            imagen.setAttribute("src", element.imagen)
            card.classList.add("card");

            card.appendChild(h2);
            figure.appendChild(imagen);
            card.appendChild(figure);
            contenedor.appendChild(card);

            count++;
        }else{
            return;
        }
    });

}
document.addEventListener("DOMContentLoaded", async () => {
    const pokemon = await getPokemons(URL_API);
    const obternerPokemones = await obtenerUrlPokemons(pokemon);
    console.log("obterner pokemones", obternerPokemones);
    pintarPokemonesMain(obternerPokemones, contenedor);
    pintarPokemonesFooter(obternerPokemones, footter);
})
//         imagen.setAttribute("src", productos.imagen);
//         h2.textContent = productos.nombre;

//         figura.appendChild(imagen);
//         div.appendChild(h2);
//         div.appendChild(figura);
//         contenedor.appendChild(div);
//     });
// }

// const productos = [
//     {
//         id: 1,
//         nombre: "Producto 1",
//         imagen: "https://yt3.ggpht.com/a/AATXAJzPD0XBaRxiZzDMzWeev6tLfvfz_m70bZoZ2Qya=s900-c-k-c0xffffffff-no-rj-mo"
//     },
//     {
//         id: 2,
//         nombre: "Producto 2",
//         imagen: "https://xsurf.es/wp-content/uploads/2021/02/Waves.jpg",
//     },
//     {
//         id: 3,
//         nombre: "Producto 3",
//         imagen: "https://xsurf.es/wp-content/uploads/2021/02/Waves.jpg",
//     }
// ]

// const contenedor = document.getElementById("prueba");

// listaProductos(productos,contenedor);


