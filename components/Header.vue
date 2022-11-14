<template>
  <header>
    <div class="title">
      <nuxt-link to="/">
        <Logo />
      </nuxt-link>
    </div>
    <nav>
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/about">
        Acerca del blog
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
header {
  padding: 5px 30px;
  background-color: var(--main-background-color-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

header .title {
  color: var(--main-color);
  font-size: 24px;
}

nav {
  display: flex;
  align-items: center;
  margin: 0 -15px;
}

nav a {
  display: block;
  margin: 0 15px;
  color: var(--main-color);
}

nav a:hover {
  color: var(--main-color-soft);
}
</style>
