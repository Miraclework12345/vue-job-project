<script setup>
import JobListing from './JobListing.vue';
// import jobData from '@/jobs.json';

import { ref, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';
defineProps({
     limit: {
          type: Number
     },
     showButton: {
          type: Boolean,
          default: true
     }
});

// const jobs = ref(jobData);
const jobs = ref([]);
onMounted (async () => {
     try {
          const response = await axios.get('/api/jobs');
          jobs.value = response.data;
     } catch (error) {
          console.log('Error fetching data', error);
     }
});
</script>
<template>
     <section class="bg-blue-50 px-4 py-10">
          <div class="container-xl lg:container m-auto">
               <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                    Browse Jobs
               </h2>
               <div v-if="jobs && jobs.length > 0" class="text-center text-gray-500 py-6">
                    <JobListing v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :Job="job" />
               </div>
               <!-- show loading spinner while loading is true -->
               <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <PulseLoader />
               </div>
          </div>
     </section>
     <section v-if="showButton === true" class="m-auto max-w-lg my-10 px-6">
          <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
               View All Jobs</RouterLink>
     </section>
</template>