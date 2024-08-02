import './styles/index.scss';
import axios from "axios";
const saludar = () => {
    console.log("Hola, mundo!");
}


const getPokemons = async() =>{
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log("response", response.data.results
        );
    } catch (error) {
        console.error("Error", error);
        
    }
}
saludar();
getPokemons();

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


