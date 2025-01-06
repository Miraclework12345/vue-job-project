<script setup>
import { defineProps } from 'vue';
defineProps({
     BGC:{
          type: String,
          default: 'bg-gray-100',
     },
});
</script>
<template>
     <div v-bind:class="`${BGC} p-6 rounded-lg shadow-md`">
          <slot></slot>
     </div>
</template>