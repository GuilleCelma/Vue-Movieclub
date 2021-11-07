<template>


<div class="infoCard ml-6 mb-6 border-1 bg-black text-white ">
    
    <img :src="url + props.poster_path" alt="" />
    <h1>{{props.title}}</h1>
    <p>{{props.rating}}</p>

</div>


</template>


<script lang="ts">
     
export default{
    
    props:["props"],

    data(){
        return{
            url:'https://image.tmdb.org/t/p/original',
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