import React, { useEffect, useState } from 'react'
import Card from './Card';
import styles from '../Styles/Cards.module.css'

const axios = require('axios');



const Cards = ({ handleChoice }) => {
    // DECLARACION DE LOS ESTADOS
    const [pokemons, setPokemons] = useState({
        loading:true,
        error: null,
        pokemons: null
    });
    const [page, setPage] = useState(1); 
    const [vista, setVista] = useState([]);
    const [search, setSeach] = useState('')


// Peticion inicial de los pokemons
    const getPokemons = async () =>{
        try {
            const res = await axios('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            setPokemons({
                loading:false,
                error: null,
                pokemons: res.data.results
            })
            console.log(pokemons)
        } catch (e) {
            setPokemons({
                loading:false,
                error: e,
                pokemons: null
            });
            console.log(e)
        }
    }

    useEffect(() => {
        getPokemons();
        console.log(pokemons.pokemons)
    }, [])


// ARMADO DE LOS POKEMONS A RENDERIZAR
    useEffect(() => {
        if (!pokemons.loading) {
        const filterPokemons = pokemons.pokemons.filter((pokemon)=> {
            return pokemon.name.toLowerCase().includes(search.toLowerCase());
        })


        const pageSlice = (pagina, array) => {
            array.push({})
            if (pagina === 0) {
                return array.slice(-10, -1);
            } else if (array.length > pagina*10) {
                return array.slice(pagina*10-10, pagina*10);
            } else {
                return array.slice(pagina*10-10, pagina*10-(pagina*10-array.length))
            };
        }

        setVista(pageSlice(page, filterPokemons))
        }
        console.log(vista)

    }, [page, pokemons, search])


    // HANDLER Y FUNCION DE BUSQUEDA
    const handleSearch = (e) => {
        setSeach(e.target.value)
        console.log(search)
    }

    return (
        <div className={styles.cards}>

            <h1 className={styles.title}>Elige tu Pokemon</h1>

            <div className={styles.center}>
                <button onClick={() => {
                    setPage(page - 1)
                }}>Anterior</button>

                <input type='text' name='search' placeholder='Busque un Pokemon...' value={search} onChange={handleSearch}/>

                <button onClick={() => {
                    setPage(page + 1)
                }}>Siguiente</button>
            </div>

            <div className={styles.container}>
            
                {
                    vista.map((pokemon, i)=>{
                        return <Card key={i} data={pokemon} handleChoice={handleChoice}/>
                    })

                }
            </div>

        </div>
        
    );
}

export default Cards