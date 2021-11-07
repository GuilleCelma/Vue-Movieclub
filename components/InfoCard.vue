<template>


<div class="infoCard ml-6 mb-6 border-1 bg-black text-white ">

    <a :href="urlMovie + props.id" target="_blank"><img :src="urlImg + props.poster_path" alt="" /></a>
    <h1 class="text-sm">{{props.title}}</h1>
    <p>{{props.rating}}</p>

</div>


</template>


<script lang="ts">
     
export default{
    
    props:["props"],

    data(){
        return{
            urlImg:'https://image.tmdb.org/t/p/original',
            urlMovie:'https://www.themoviedb.org/movie/',
            data:this.props
        }
    },
    
}
</script>

<style scoped>
img{
  width: 100%;
  height:400px;
}

.infoCard{
    width: 300px;
}
</style>