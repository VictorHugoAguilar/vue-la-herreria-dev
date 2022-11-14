<template>
  <div class="home-page">
    <h1 class="en-construccion">En Construccion !!!</h1>
    <img src="@/assets/resources/en-construccion.jpg" alt="en construccion" />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img {
  width: 100%;
}

.home-page {
  margin: 0 auto;
  width: 100%;
  padding: 50px 30px;
  background-color: var(--main-background-color);
  z-index: 1;
}

.en-construccion {
  width:calc(100% - 200px);
  top: 50%;
  text-align: center;
  float: left;
  font-size: 5rem;
  z-index: 99;
  position: absolute;
  color: white;
}
</style>
