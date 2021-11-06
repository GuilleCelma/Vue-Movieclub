<template>
  <div >
      
    <section id="intro" >
      <h2>Top Rated Movies!</h2>
      

      <div id="moviesContainer" v-for="movie in movies" :key="movie.title">

        <h2>{{movie.title}}</h2>


      </div>

    </section>


  </div>

</template>

<script lang="ts">
import {mapState,mapGetters, mapActions, mapMutations} from "vuex"
  
  export default{
    computed: mapState("movies",["movies"]),
    methods:{
     ...mapActions("movies",["loadMovies"]) 
     
    },
    created(){
       this.loadMovies() 
    }

    
    
  }

</script>
<style scoped>

section{

  height: 150vh;
  
}
</style>