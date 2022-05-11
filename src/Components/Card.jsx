import React, { useEffect, useState } from 'react';
import styles from '../Styles/Card.module.css';

const axios = require('axios');

const backgroundPerType = (type) => {
  switch (type) {
    case 'normal':
      return {backgroundColor: 'grey'}
    case 'fighting':
      return {backgroundColor: 'darkred'}
    case 'flying':
      return {backgroundColor: 'azure'}
    case 'poison':
      return {backgroundColor: 'darkmagenta'}
    case 'ground':
      return {backgroundColor: 'moccasin'}
    case 'rock':
      return {backgroundColor: 'goldenrod'}
    case 'bug':
      return {backgroundColor: 'olive'}
    case 'ghost':
      return {backgroundColor: 'darkslateblue'}
    case 'steel':
      return {backgroundColor: 'gainsboro'}
    case 'fire':
      return {backgroundColor: 'darkorange'}
    case 'water':
      return {backgroundColor: 'dodgerblue'}
    case 'grass':
      return {backgroundColor: 'greenyellow'}
    case 'electric':
      return {backgroundColor: 'gold'}
    case 'psychic':
      return {backgroundColor: 'deeppink'}
    case 'ice':
      return {backgroundColor: 'darkturquoise'}
    case 'dragon':
      return {backgroundColor: 'orangered'}
    case 'dark':
      return {backgroundColor: '#155358'}
    case 'fairy':
      return {backgroundColor: 'hotpink'}
    case 'unknown':
      return {backgroundColor: 'white'}
    case 'shadow':
      return {backgroundColor: 'gainsboro'}
    default:
      return {backgroundColor: 'yellow'};
  }
}


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