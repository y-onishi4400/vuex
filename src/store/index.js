import Vue from 'vue'
import Vuex from 'vuex'
import { ADD_BOOK } from '../mutation-types'
// import { filter } from 'core-js/fn/array'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  state: {
    books: [
      {
        isbn: '978-4-8222-5389-9',
        title: '作って楽しむプログラミング HTML5超入門',
        price: 2000
      },
      {
        isbn: '978-4-7981-5757-3',
        title: 'JavaScript逆引きレシピ',
        price: 2800
      },
      {
        isbn: '978-4-7741-9763-0',
        title: '3ステップでしっかり学ぶ Python 入門',
        price: 2480
      },
      {
        isbn: '978-4-7981-5382-7',
        title: '独習C# 新版',
        price: 3600
      },
      {
        isbn: '978-4-8399-6644-7',
        title: 'たのしいラズパイ電子工作ブック',
        price: 1900
      },
    ]
  },

  getters: {
    booksCount(state){
      return state.books.length
    },
    getBooksByPrice(state){
      return price => {
        // filter はjavascriptの標準メゾット
        // 配列に対してfilterメソッドを指定
        // array.filter(callback [,that]);
        // state.booksの中からprice(state)以上の本を除外する関数
        return state.books.filter(book => book.price < price)
      }
    }
  },
  mutations: {
    // ミューテーションで引数を持つことも可能
    // この引数をpayload(ペイロード)を呼ぶ
    addBook(state, payload){
      // payload.bookで本の情報を登録
      // 登録する情報のフォームはApp.vue内で定義
      // bookプロパティーに書籍情報を渡す
      state.books.push(payload.book)
    }
  },

  // 非同期処理をする場合はアクションとして切り出す
  // 関連するミューテーションを呼び出してアクションで更新をする
  actions: {
    addAsync(context, payload){
      console.log('context');
      console.log(context);
      console.log('payload');
      console.log(payload);
      // context booksオブジェクトを取得
      // payload.bookで本の情報を登録
      // bookプロパティーに書籍情報を渡す
      setTimeout(function(){
        context.commit(ADD_BOOK, payload)
      }, 5000)
    }
  }
})
