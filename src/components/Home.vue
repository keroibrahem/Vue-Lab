<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-4">
    <h2 class="mb-4">Students List</h2>
    <table class="table table-bordered table-hover shadow-sm">
      <thead class="table-primary">
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          <td>
            <router-link :to="`/student/${student.id}`" class="btn btn-sm btn-info me-2">View</router-link>
            <router-link :to="`/edit/${student.id}`" class="btn btn-sm btn-warning">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return { students: [] }
  },
  mounted() {
    axios.get('http://localhost:3000/students')
      .then(res => this.students = res.data);
  }
}
</script>
