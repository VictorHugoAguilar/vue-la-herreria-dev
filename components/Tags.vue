<template>
  <div>
    <span v-for="tag of arrayTags" :key="tag" class="tag" :style="getClass(tag)">
      {{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
import { selectTag } from '@/helpers/selectorTag.js'
export default {
  name: 'TagComponent',
  props: {
    tags: {
      type: String,
      required: true
    }
  },

  setup(props) {
    const getClass = (type) => {
      return selectTag(type.trim().toLowerCase())
    }
    return {
      arrayTags: computed(() => props.tags?.includes(',') ? props.tags?.split(',') : [props.tags]),
      // methods
      getClass
    }
  }

}
</script>

<style>
.tag {
  align-self: flex-start;
  padding: .25em .75em;
  border-radius: 1em;
  font-size: .75rem;
  box-shadow: 10px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.tag+.tag {
  margin-left: .5em;
}

</style>
