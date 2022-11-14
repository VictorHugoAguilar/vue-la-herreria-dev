<template >
  <div class="bg-slate-800">
    <Header />
    <Nuxt class="container mx-auto justify-center " />
    <Footer />
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
*,
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

a {
  text-decoration: none;
}

p {
  margin-bottom: 15px;
}

p:last-of-type {
  margin-bottom: 0px;
}
</style>
