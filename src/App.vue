<template>
  <!-- <div id="app">
    <p>{{ count }}</p>
    <p>
      <input type="button" value="-" v-on:click="minus">
      {{ count }}
      <input type="button" value="+" v-on:click="plus">
    </p>
  </div> -->

  <div>
    <form v-on:submit.prevent="onclick">
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="isbn">
      <label for="title">書名：</label>
      <input type="text" id="title" v-model="title">
    <label for="price">価格：</label>
    <input type="number" id="price" v-model="price" /><br />
    <input type="submit" value="登録" />
    </form>
    <hr>
    <p>書籍は全部で{{booksCount}}冊あります。</p>
    <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
      <li>{{b.title}}（{{b.price}}円）<br />ISBN：{{b.isbn}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  // components: {store},

  computed: mapGetters(['booksCount', 'getBooksByPrice']),

  // フォーム内で扱う情報を準備
  data() {
    return {
      isbn: '',
      title: '',
      price: 0
    }
  },
  methods: {
    ...mapActions({add: 'addAsync'}),

    // 登録ボタンクリックでストアに反映
    onclick() {
      this.add({
        book: {
          isbn: this.isbn, title: this.title, price: this.price
        }
      })
    }
  }


  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // methods: {
  //   minus(){
  //     this.$store.commit('minus')
  //   },
  //   plus(){
  //     this.$store.commit('plus')
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>