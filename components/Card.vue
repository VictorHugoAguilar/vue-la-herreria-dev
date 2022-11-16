<template>
  <div class="container">
    <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
      <div class="card">
        <div class="card__header">
          <img :src="require(`~/assets/resources/${article.img}`)" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <Tags :tags="article.tags" />
          <h4>{{ article.title }}</h4>
          <p>{{ getDescription }}</p>
        </div>
        <AuthorPost :article="article" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { computed } from 'vue'
import { getHourDateFormated } from '@/helpers/dateHelper'

export default {
  name: 'CardComponent',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      formateDate: computed(() => getHourDateFormated(props.article.createdAt)),
      getDescription: computed(() => props.article.description.length > 150 ? props.article.description.slice(0, 150) + '...' : props.article.description)
    }
  }
}
</script> 

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

:host {
  display: block;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Quicksand", sans-serif;
  display: grid;
  place-items: center;
  height: 100vh;
  background: #7f7fd5;
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ECE9E6;
  background: linear-gradient(to right, #FFFFFF, #ECE9E6);

}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.card__body h4 {
  font-size: large;
  font-weight: bold;
  text-transform: capitalize;
}

.card__body p {
  font-size: medium;
  font-weight: lighter;
}
</style>
