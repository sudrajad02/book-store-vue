<template>
  <Navbar />
  <router-view :bookList="booksData" @store="storeData" @update="updateData" @delete="deleteData" />
</template>

<script>
import Navbar from './components/Navbar.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      booksData: []
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios.get('http://localhost:10000/book').then(res => {
        this.booksData = res.data.data
      }).catch ((err) => {
        console.log(err);
      })
    },

    storeData(bookCreated) {
      axios.post('http://localhost:10000/book/new', bookCreated).then(res => {
        console.log(res);
        this.getData();
        alert("Data berhasil ditambahkan!");
      }).catch ((err) => {
        console.log(err);
      })
    },

    updateData(bookChange) {
      axios.post('http://localhost:10000/book/update/' + bookChange.id, bookChange).then(res => {
        console.log(res);
        this.getData();
        alert("Data berhasil diubah!");
      }).catch ((err) => {
        console.log(err);
      })
    },

    deleteData(book) {
      console.log(book.id);
      axios.delete('http://localhost:10000/book/delete/' + book.id).then(res => {
        console.log(res);
        this.getData();
        alert("Data berhasil dihapus!")
      }).catch ((err) => {
        console.log(err);
      })
      
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
