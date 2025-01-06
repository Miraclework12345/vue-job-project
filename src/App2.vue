<script setup>
  import { ref,onMounted } from 'vue';
  const myname = ref('walter white');
  const status = ref("not ok");
  const Tasks = ref(['wash', 'play', 'read']);
  const Link = ref('https://www.w3schools.com/');
  const newTask = ref('');
  const addTask = () => {
    if(newTask.value.trim() === "" ){
      window.alert('add some tasks real not just some what space ');
    }else{
      Tasks.value.push(newTask.value);
      newTask.value="";
    }
  }
  const toggleStatus = () => {
    if (status.value === "not ok") {
      status.value = "ok";
    } else if (status.value === "ok") {
      status.value = "nothing";
    } else {
      status.value = "not ok";
    }
  };
  const deleteTask = (index) => {
    Tasks.value.splice(index,1);
  };  
  onMounted(async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      data.forEach(data => {
        Tasks.value.push(data.title);
      });
    } catch (error) {
      console.log('Error for fetching data',error);
    }
  }); 
    
</script>
<template>
  <h1 class="bg-red-500"> {{ myname }}</h1>
  <p  class="bg-red-500" v-if="status === 'ok'">you can see me if status be ok</p>
  <p v-else-if="status === 'not ok'">you can see me if status be not ok</p>
  <p v-else>you can see me if status wasn't one of above</p>
  
  
  <form @submit.prevent="addTask" >
    <label for="newtask"> Add Task</label>
    <input type="text" id="newTask" name="newtask" v-model="newTask">
    <button type="submit"> Click to add task</button>
  </form>


  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index ) in Tasks" :key="task">
      {{ task }}
      <button type="submit"  @click="deleteTask(index)">Delete me!</button>
    </li>
    
  </ul>
  <!-- <a v-bind:href="Link"> go to w3schools</a> -->
  <a :href="Link">go to w3schools</a>
  <br>
  <!-- <button v-on:click="toggleStatus()"> Click to switch status</button> -->
  <button @click="toggleStatus()">Click me and you see something will be change in the top</button>
</template>
