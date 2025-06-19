<template>
  <div class="container mt-4" v-if="student">
    <h2>Student Details</h2>
    <p><strong>Name:</strong> {{ student.name }}</p>
    <p><strong>Age:</strong> {{ student.age }}</p>
    <p><strong>Major:</strong> {{ student.major }}</p>
    <router-link to="/" class="btn btn-secondary">Back</router-link>
    <router-link :to="`/edit/${student.id}`" class="btn btn-warning">Edit</router-link> 
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { student: null }
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://localhost:3000/students/${id}`)
      .then(res => this.student = res.data);
  }
}
</script>
