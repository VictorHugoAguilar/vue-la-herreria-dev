<template>
  <div class="header">
    <div class="posted">
      <AuthorPost :article="article" />
      <div class="title">
        {{ article.title }}
      </div>
      <div class="tags">
        <Tags :tags="article.tags" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostHeader',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
    }
  }

}
</script>

<style scoped>
.header {
  border-bottom: thin solid var(--main-color-soft);
  padding: 0px 10px 20px 10px;
}

.posted {
  background-color: var(--main-background-color);
  color: var(--main-color-soft)
}

.title {
  font-size: 4rem;
  font-weight: bolder;
}
</style>
