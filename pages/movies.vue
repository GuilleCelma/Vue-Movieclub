<template>
  <div >
      
    <section id="intro" >
      <h2>Top Rated Movies!</h2>
      
      <div class="flex flex-wrap justify-center items-center">

        <InfoCard id="moviesContainer" v-for="movie in movies" :key="movie.title" :props="movie" /> 
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