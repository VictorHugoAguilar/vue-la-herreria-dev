<template>
  <div class="card__footer">
    <div class="user">
      <img :src="article.iauthor" alt="user__image" class="user__image">
      <div class="user__info">
        <h5>{{ article.author }}</h5>
        <small>creado el {{ formateDate }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { getHourDateFormated } from '@/helpers/dateHelper'

export default {
  name: 'AuthorPost',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      formateDate: computed(() => getHourDateFormated(props.article.createdAt)),
    }
  }

}
</script>

<style scoped>
.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: .5rem;
}

.user__image {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}

.user__info>small {
  color: #666;
}
</style>