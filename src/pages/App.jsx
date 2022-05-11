import { useState } from 'react';
import Cards from '../Components/Cards.jsx';

const axios = require('axios');

// Peticion de lista de pokemones
// Agarro los primeros 10 ----> State de componente Cards (Contenedor de 10 cartas) va incremenetando de a 10 pokemones 
// Para el buscador tengo que usar un filter que vaya actualizando el Array de pokemones

function App() {

  const [info, setInfo] = useState({
    pokemon: {},
    data: {}
  });

  const handleChoice = async (pokemon) => {
    const res = await axios.get(pokemon.url)
    setInfo({
      pokemon: pokemon,
      data: res.data
    }
      )
    console.log('Seleccionaste un pokemon', info)
  }


  return (
    <>
      <Cards handleChoice={handleChoice}/>
    </>
  );
}

export default App;
