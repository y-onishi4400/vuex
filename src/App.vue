<template>
  <div id="app">
    <p>{{ count }}</p>
    <p>
      <input type="button" value="-" v-on:click="minus">
      {{ count }}
      <input type="button" value="+" v-on:click="plus">
    </p>
  </div>
</template>

<script>
export default {
  name: 'app',
  // components: {store},

  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    minus(){
      this.$store.commit('minus')
    },
    plus(){
      this.$store.commit('plus')
    }
  }
}
</script>
