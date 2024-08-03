import './styles/index.scss';
import axios from "axios";

const URL_API = "https://pokeapi.co/api/v2/pokemon"

const getPokemons = async(url) =>{
    try {
        const response = await axios.get(url);
        return response.data.results
    } catch (error) {
        console.error("Error", error);
        return null;
    }
}


const obtenerUrlPokemons = async(listaPokemon) =>{
    const detallesPokemons = [];
    try {
        for(const pokemon of listaPokemon){
            const response = await axios.get(pokemon.url);

            detallesPokemons.push({
                id: response.data.id,
                nombre: pokemon.name,
                imagen: response.data.sprites.other.home.front_default
            })
        }
        
    } catch (error) {
        console.error("Error", error);
        
    } finally{
        return detallesPokemons;
    }
}

document.addEventListener("DOMContentLoaded",async() => {
    const pokemon = await getPokemons(URL_API);
    console.log("getPokemon",pokemon);
    const obternerPokemones = await obtenerUrlPokemons(pokemon);
    console.log("obterner", obternerPokemones);
})

function pintarPokemones(pokemon,contenedor){
    
}
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


