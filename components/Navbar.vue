<template>
     <header :class="{'scroll-nav': scrollPosition}" >
    <nav class="w-screen h-24 fixed  flex justify-between items-center shadow-lg">
      <div class="logo flex items-center ml-14">
        <h2 class="text-5xl">Movieclub</h2>
      </div>
      <input class="border-2 border-gray-300 bg-white h-10  px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search..">
       
        </input>
      <ul class="navigation flex mr-12 items-center" >
        <li><a class="no-underline font-bold mr-5 " href="/movies">movies</a></li>
        <li><a class="no-underline font-bold mr-5" href="/people">people</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">

</script>

<style >
   
    
    input{
        width: 400px;
    }
</style>