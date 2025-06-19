<template>
  <div class="container mt-4">
    <h2>Add New Student</h2>
    <form @submit.prevent="addStudent">
      <input v-model="student.name" placeholder="Name" class="form-control mb-2" required />
      <input v-model="student.age" type="number" placeholder="Age" class="form-control mb-2" required />
      <input v-model="student.major" placeholder="Major" class="form-control mb-3" required />
      <button class="btn btn-success" type="submit">Add Student</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      student: { name: '', age: '', major: '' }
    };
  },
  methods: {
    addStudent() {
      axios.post('http://localhost:3000/students', this.student)
        .then(() => {
          this.$router.push('/');
        });
    }
  }
}
</script>
