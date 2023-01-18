<template>
  <div class="about">
    <h1>글 보기</h1>
    <div class="text"><span class="static">작성자 : </span><span class="var">{{data.writer}}</span></div>
    <div class="text"><span class="static">제목 : </span><span class="var">{{data.title}}</span></div>
    <div class="text"><span class="static">내용 - </span><span class="var">&nbsp;</span></div>
    <p>{{data.content}}</p>
    <button @click="updateData">수정</button>
    <button @click="goList">목록으로</button>
    <button @click="deleteData" class="delBtn">삭제</button>
  </div>
</template>

<script>
import data from '@/data'
export default {
  data(){
    const idx = this.$route.params.id;
    return {
      data : data[idx],
      index : idx
      // 'idx : this.$route.params.id' 이렇게 입력하고 template에 idx를 줘도된다.
    }
  },
  methods:{
    goList(){
      this.$router.push('/')
    },
    updateData(){
      const target = this.index;
      this.$router.push({
        name: 'create',
        params:{
          id : target
        }
      })
    },
    deleteData(){
      const aData = data;
      aData.splice(this.index,1)
      this.$router.push('/')
    }
  }
}
</script>

<style>
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
  .delBtn{
    background: #ffc4c8;
  }
  .delBtn:hover{
    background: #f7323f;
    color:#fff;
  }
</style>