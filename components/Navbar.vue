<template>
     <header :class="{'scroll-nav': scrollPosition}" >
    <nav class="w-screen h-24 fixed  flex justify-between items-center shadow-lg">
      <div class="logo flex items-center ml-14">
        <h2 class="text-5xl">Movieclub</h2>
      </div>
      <input class="border-2 border-gray-300 bg-white h-10  px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search.."/>
       
      <ul class="navigation flex mr-12 items-center" >
        <li><Nuxt-link class="no-underline font-bold mr-5 " to="/movies">Movies</Nuxt-link></li>
        <li><Nuxt-link class="no-underline font-bold mr-5" to="/people">People</Nuxt-link></li>
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