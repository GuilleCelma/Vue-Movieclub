
import axios from "axios"


/*
He intentado la siguiente solucion porque soy consciente de que las claves de API siempre van guardadas en variables de entorno
por seguiridad, me he dado cuenta de en el servidor funcionava, ya que el console.log(url) devolvia la url con la key correctamente 
en la terminal de vsc, pero en la consola del browser el mismo .log daba https://api.themoviedb.org/3/movie/top_rated?api_key=undefined.
No he sido capaz de encontrar documentacion al respecto.


let key = process.env.API_KEY
let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`
 */


let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=3c59a1bf1cbd14333e0179f3dd37c4db`


/* interface movie {
    id:number,
    title: string,
    image:string,
    date: string,
    description:string,
    reting:number
} */

//Estado
export const state = ()=>({
    movies:[]
})



//Acciones
export const actions ={
     async loadMovies({commit}){
        //Obtener las peliculas de la API
        let movies = await axios.get(url)
        
        //Realizar Commit
        commit("setMovies", movies.data.results)
    }
}       

//Mutaciones
export const mutations ={
    setMovies(state, movies){
        movies.map
        state.movies = movies
    }
}

