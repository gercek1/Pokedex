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
                    peso: response?.data.weight || null,
                    altura: response?.data.height || null,
                    tipo: response?.data.types[0].type.name || null,
                    nivel: response?.data.base_experience || null,
                    habilidades: response?.data.abilities.map(habilidad => habilidad.ability.name).join(", ") || null,

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
    const lista = document.createElement("ul");
    pokemons.forEach((element, index) => {
        if (index === 0) {
            const card = document.createElement("article");
            const card2 = document.createElement("article");
            const figure = document.createElement("figure");
            const imagen = document.createElement("img");
            const h2 = document.createElement("h2");
            const id = document.createElement("li");
            const peso = document.createElement("li");
            const altura = document.createElement("li");
            const tipo = document.createElement("li");
            const nivel = document.createElement("li");
            const habilidad = document.createElement("li");

            h2.textContent = element.nombre;
            imagen.setAttribute("src", element.imagen)
            card.classList.add("card");

            card.appendChild(h2);
            figure.appendChild(imagen);
            card.appendChild(figure);
            contenedor.appendChild(card);
            card2.appendChild(lista);
            id.textContent = `ID: ${element.id}`;
            nivel.textContent = `Nivel: ${element.nivel}`;
            tipo.textContent = `Tipo: ${element.tipo}`;
            habilidad.textContent = `Habilidades: ${element.habilidades}`;
            peso.textContent = `Peso: ${element.peso}kg`;
            altura.textContent = `Altura: ${element.altura}m`;
            lista.appendChild(id);
            lista.appendChild(nivel);
            lista.appendChild(tipo);
            lista.appendChild(peso);
            lista.appendChild(habilidad);
            lista.appendChild(altura);
            contenedor.appendChild(card2);
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
        } else {
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


