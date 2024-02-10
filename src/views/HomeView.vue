<template>
  <div class="home">
    <Show/>
  </div>
</template>

<script>
// @ is an alias to /src
import Show from '@/components/Home.vue'
import social from '../views/Social.vue'
export default {
  name: 'HomeView',
  components: {
    Show
  }
}
</script>
