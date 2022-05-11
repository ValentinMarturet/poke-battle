import React, { useEffect, useState } from 'react';
import styles from '../Styles/Card.module.css';
import { backgroundPerType } from '../utils/backgroundPerType';

const axios = require('axios');


const Card = ({ data, handleChoice }) => {

  const [pokemon, setPokemon] = useState({
    name:"",
    url: ""
  })

  const [image, setImage] = useState('');
  const [type, setType] = useState('');

  const getImage = async (url) => {
    try {
      const res = await axios.get(url)
      setImage(res.data.sprites.front_default)
      setType(res.data.types[0].type.name)
    } catch (e) {
      console.log('Ocurrio un error ', e)
    }
  };

  useEffect(() => {
    if (data){ 
      if(!(pokemon === data)) {
        setPokemon({
          name: data.name,
          url: data.url
        })
        getImage(data.url)
        
      } else {
        setPokemon(pokemon)
      }
    }
  
  }, [data])

  const handleClick = () => {
    console.log('You choose ', pokemon.name);
    handleChoice(pokemon);
  }

  return (
    <div onClick={handleClick} className={styles.card} style={backgroundPerType(type)}>
        <img src={image} alt='Pokemon' className={styles.img}/>
        <h2 className={styles.pokename}>{pokemon.name}</h2>
    </div>
  )
}

export default Card