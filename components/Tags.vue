<template>
  <div>
    <span v-for="tag of arrayTags" :key="tag" class="tag" :class="getClass(tag)">
      {{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
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
      if (type.trim().toLowerCase() === 'javascript') {
        return 'tag-brown'
      }
      if (type.trim().toLowerCase() === 'typescript') {
        return 'tag-blue'
      }
      return 'tag-red'
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
}

.tag+.tag {
  margin-left: .5em;
}

.tag-blue {
  background: #56CCF2;
  background: linear-gradient(to bottom, #2F80ED, #56CCF2);
  color: #fafafa;
}

.tag-brown {
  background: #D1913C;
  background: linear-gradient(to bottom, #FFD194, #D1913C);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}
</style>
