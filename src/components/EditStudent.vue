<template>
  <div class="container mt-4">
  <div class="card shadow p-4">
    <h3 class="mb-4">Add / Edit Student</h3>
    <form @submit.prevent="updateStudent">
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input v-model="student.name" class="form-control" required>
      </div>
      <div class="mb-3">
        <label class="form-label">Age</label>
        <input v-model="student.age" type="number" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  </div>
</div>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      student: {}
    }
  },
  mounted() {
    const id = this.$route.params.id
    axios.get(`http://localhost:3000/students/${id}`).then(res => {
      this.student = res.data
    })
  },
  methods: {
    updateStudent() {
      axios.put(`http://localhost:3000/students/${this.student.id}`, this.student)
        .then(() => {
          alert('Student updated!')
          this.$router.push('/')
        })
    }
  }
}
</script>
