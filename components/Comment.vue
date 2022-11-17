<template>
  <div class="container-comment">
    <div class="content-parrafo-comment">
      <span class="parrafo-comment">Si tienes algún comentario o alguna duda este es tu sitio</span>
    </div>
    <div id="disqus_thread"></div>
    <noscript>
      Habilite JavaScript para ver los <a href="https://disqus.com/?ref_noscript"> comentarios by Disqus.</a>
    </noscript>
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'CommentComponent',
  setup() {
    const appendComment = () => {
      const d = document
      const s = d.createElement('script')
      s.src = 'https://victorhugoaguilar-com-2.disqus.com/embed.js'
      // eslint-disable-next-line func-call-spacing
      s.setAttribute('data-timestamp', +new Date());
      // eslint-disable-next-line no-unexpected-multiline
      (d.head || d.body).appendChild(s)
    }
    onMounted(() => appendComment())
  }
}
</script>

<style scoped>
.container-comment {
  margin-top: 50px;
  margin-bottom: 30px;
  background-color: #F1F3F4;
  padding: 20px;
  border-radius: 20px;
}
.content-parrafo-comment{
  background-color: var(--highlight-background-color);
  display: inline-block;
  padding: 10px 10px;
  margin-bottom: 10px;
}
.parrafo-comment {
  display: inline-block;
  color: var(--highlight-color-text);
}
</style>
