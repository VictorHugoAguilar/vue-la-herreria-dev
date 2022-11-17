<template>
  <div class="home-page">
    <div class="slug-image-header">
      <img class="slug-image-header-img" :src="require(`~/assets/resources/${article.img}`)" alt="card__image" />
    </div>
    <article>
      <PostHeader :article="article" />
      <br />
      <nuxt-content :document="article" />
      <nuxt-link to="/">
        <div class="volver">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
        </div>
      </nuxt-link>
      <Comment />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    return { article }
  }
}
</script>

<style>
.slug-image-header {
  height: calc(20vh);
  display: block;
  overflow: hidden;
}

.slug-image-header-img {
  width: 100%;
  object-fit: cover;
}

.home-page {
  margin: 0 auto;
  width: 100%;
  background-color: var(--main-background-color);
}

article {
  display: block;
  margin: 0 auto;
  padding: 20px 10px;
  max-width: 800px;
  color: var(--main-color-text);
}

h1 {
  color: var(--main-color-soft);
  font-size: 28px;
  font-weight: 900;
  margin: 15px 0px;
}

h2 {
  color: var(--main-color-soft);
  font-size: 20px;
  font-weight: 900;
  margin: 10px 0px;
}

ul {
  padding-left: 30px;
  list-style-type: circle;
  margin: 10px;
}

.volver {
  color: var(--main-color-soft);
  position: fixed;
  bottom: 70px;
  right: 110px;
  width: 70px;
  height: 70px;
}

p {
  margin: 15px 0px;
}
</style>
