<template>
  <div class="about">
    <h1>{{ idx !== undefined? '글 수정':'글 쓰기' }}</h1>
    <div class="text"><span class="static">작성자 : </span><span class="var"><input type="text" v-model="writer"></span></div>
    <div class="text"><span class="static">제목 : </span><span class="var"><input type="text" v-model="title"></span></div>
    <div class="text"><span class="static">내용 - </span><span class="var">&nbsp;</span></div>
    <p><textarea v-model="content" cols="30" rows="10"></textarea></p>
    <button @click="goList">뒤로</button>
    <button @click="idx !== undefined? update():write()">{{ idx !== undefined? '수정' : '작성' }}</button>
  </div>
</template>

<script>
import data from '@/data'
export default {
  name:'Create',
  data(){
    const idx = this.$route.params.id;
    return {
      data : data,
      idx : idx,
      writer : idx !== undefined? data[idx].writer:'',
      title : idx !== undefined? data[idx].title:'',
      content: idx !== undefined? data[idx].content:'',
    }
  },
  methods:{
    write() {
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
      this.$router.push({
        path:'/'
      })
    },
    update() {
      const target = data[this.idx]
      target.writer = this.writer
      target.title = this.title
      target.content = this.content
      this.$router.push({
        path:'/'
      })
    },
    goList(){
      this.$router.push('/')
    }
  }
}
</script>

<style>
  input{
    width: 80%;
    border: none;
    border-bottom: 2px solid #adb5bd;
    transition: border 0.4s;
  }
  input:focus{
    outline: none;
    border-bottom-width: 2.5px;
    border-bottom-color: #42b983;
  }
  .text{
    display: flex;
    justify-content: space-evenly;
    width: 250px;
    margin: 10px auto
  }
  p{
    width: 250px;
    min-height: 100px;
    box-sizing: border-box;
    padding: 8px;
    background: #f7f5ff;
    text-align: left;
    margin: 0 auto 15px;
  }
  .var{
    width: 200px;
  }
  .static{
    width: 80px;
  }
</style>