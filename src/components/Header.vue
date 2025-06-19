<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    <router-link class="navbar-brand" to="/">Student Manager</router-link>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/add">Add Student</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
