<template>
  <div class="about">
    <table border="1" style="margin:auto">
      <tr>
        <td>Writer</td>
        <td>Title</td>
        <td>Content</td>
      </tr>
      <tr v-for="(i, idx) in data" :key="idx">
        <td>{{ i.writer }}</td>
        <td @click="goDetail(idx)" style="cursor:pointer">{{ i.title }}</td>
        <td>{{ i.content }}</td>
      </tr>
    </table>
    <br/>
    <button @click="goCreate">글쓰기</button>
  </div>
</template>

<script>
import data from '@/data/'

export default {
  data() {
    return {
      data      
    }
  },
  methods:{
    goCreate() {
      this.$router.push('/create')
    },
    goDetail(idx) {
      this.$router.push({
        name: 'detail',
        params: {
          id : idx
        }
      })
    }
  }
}
</script>

<style>
  td{
    width: 100px;
    height: 30px;
    border: 1px solid #adb5db;
    border-right: none;
    border-left: none;
  }
  td:nth-child(2){
    width: 200px;
  }
  table{
    border-collapse: collapse;
    border:none
  }
</style>