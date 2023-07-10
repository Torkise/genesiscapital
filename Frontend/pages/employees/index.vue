<template>
  <container>
    <div class="meet-the-employees">
      <pagetitle>Meet the experts</pagetitle>
      <div class="employees-description">
        <p class="page-text">Our company is proud to have a team of highly skilled and experienced professionals. Each of
          our
          employees brings unique expertise and perspectives to the table, allowing us to provide the best possible
          service
          to
          our clients. Get to know our team members below:</p>
      </div>
      <div class="employees-list">
        <!-- Iterates through the employees and creates a n employee card -->
        <div v-for="employee in employees" :key="employee.id">
          <NuxtLink :to="'/employees/' + employee.id">
            <div class="employee-card">
              <img class="employee-img" :src="employee.photo">
              <h2>{{ employee.name }}</h2>
              <div>{{ employee.title }}</div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
export default defineNuxtComponent({
  async asyncData() {
    // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
    const employees = await $fetch(useRuntimeConfig().public.serverURL + '/employees')

    return {
      employees
    }
  }
})
</script>

<style>
.employees-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25vh, 1fr));
  grid-gap: 20px;
}

.employees-description {
  margin-bottom: 8rem;
}
.employees-description p {
  font-size: 24px;
  font-family: Poppins;
  color: #333;
  margin-bottom: 2rem;
  margin-left: 5px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .employees-description p {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .employees-description p {
    font-size: 11px;
  }
}

.employee-card {
  background-color: #FFFFFF;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
}

.employee-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.employee-img {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
  max-width: 150px;
}
</style>
