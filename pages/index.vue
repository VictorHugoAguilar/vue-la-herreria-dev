<template>
  <div class="home-page">
    <h2>
      Últimos artículos
    </h2>
    <div class="articles">
      <div v-for="article of articles" :key="article.slug" class="article">
        <Card :article="article" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },

  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      // .only(['title', 'description', 'slug', 'img', 'tag', 'author'])
      .sortBy('createAt', 'asc')
      .fetch()

    console.log(articles)

    return { articles }
  }

}
</script>

<style scoped>
.home-page {
  margin: 0 auto;
  width: 90%;
  padding: 50px 30px;
  background-color: var(--main-background-color);
}

h2 {
  margin-bottom: 30px;
  text-align: center;
  color: var(--main-color);
  font-weight: 600;
}

.articles {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
