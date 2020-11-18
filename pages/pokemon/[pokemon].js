import head from 'next/head'

function Pokemon({ pokemon }) {
    return (
        <>
        <head>
            <title>This Pokemon Page: {pokemon?.name}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </head>
        <div className='container'>
            Welcome, {pokemon?.name}!
            <img src={pokemon?.sprites.front_default} alt='this is a pokemon' />
        </div> 
        </>
    )       
}

export async function getStaticPaths({locale}) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemon = await res.json()

    let paths = pokemon.results.map(p => {
        return `/pokemon/${p.name}`
    })

    return {
        paths : [
            { params: {locale: 'en-US'} },
        ],
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
    const pokemon = await res.json()

    return {
        props: {
            pokemon
        }
    }
}

export default Pokemon
