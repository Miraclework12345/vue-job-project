<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
<section class="text-center flex flex-col justify-center items-center h-96">
     <h1 class="text-6xl font-bold mb-4">
          About the page
     </h1>
     <p class="text-xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam ab nesciunt error cum laboriosam aut molestias, alias voluptatibus magni? Dolores et aliquid accusantium numquam ducimus facere, ullam totam. Veniam.
     </p>
     <RouterLink to="/" class="text-white bg-green-700 hover:bg-green-900 rounded-md px-3 py-2 mt-4">Go Back</RouterLink>
</section>
     
</template>