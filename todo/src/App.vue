<template>
  <v-app>
    <v-app-bar dark color="#00498c " app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>연습용 ToDo리스트</v-toolbar-title>
    </v-app-bar>
    <v-card fluid fill-height>
      <v-main>
        <v-container>
          <v-row class="my-5">
            <v-col cols="8" offset="1">
              <v-text-field label="toDo" autofocus v-model="todoValue"></v-text-field>
            </v-col>
            <v-col cols="2" my-2 class="d-flex align-center">
              <v-btn color="#00498c" dark fluid>
                <v-icon class="text-h4" @click.stop="fnSubmitTodo()">mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-list two-line v-for="i in toDos" :key="i.key">
                <v-card flat color="grey lighten-3" v-if="!i.b_edit">
                  <v-list-item class="py-2">
                    <v-list-item-action>
                      <v-checkbox v-model="i.b_completed" @change="fnCheckboxChange(i)"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title :class="{'style-completed':i.b_completed}">{{ i.todoValue }}</v-list-item-title>
                      <v-list-item-subtitle class="mt-2">
                        <v-icon class="pointer mx-2" @click="fnSetEditTodo(i['.key'])">mdi-square-edit-outline</v-icon>
                        <v-icon class="pointer" @click="fnDeleteTodo(i['.key'])">mdi-delete</v-icon>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
                <v-card v-else dark>
                  <v-list-item class="py-2">
                    <v-list-item-action>
                      <v-checkbox v-model="i.b_completed" @change="fnCheckboxChange(i)"></v-checkbox>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-text-field autofocus clearable v-model="i.todoValue"></v-text-field>
                      <v-list-item-subtitle class="mt-2">
                        <v-icon class="pointer mx-2" @click.stop="fnSaveEdit(i)">mdi-check</v-icon>
                        <v-icon class="pointer" @click.stop="fnCancelEdit(i['.key'])">mdi-cancel</v-icon>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-card>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import {TodosInfDB} from '@/datasources/firebase';
import { compileSchema } from 'ajv/dist/compile';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data() {
    return{
      toDos: [],
      todoValue: ''
    }
  },
  firebase: {
    toDos: TodosInfDB
  },
  methods: {
    fnSubmitTodo(){
      TodosInfDB.push({
        todoValue: this.todoValue,
        b_edit: false,
        b_completed: false
      })
    },
    fnCheckboxChange(pItem){
      const sKey = pItem['.key']
      TodosInfDB.child(sKey).update({
        b_completed: pItem.b_completed
      })
    },
    fnSetEditTodo(pKey){
      TodosInfDB.child(pKey).update({
        b_edit: true
      })
    },
    fnDeleteTodo(pKey){
      TodosInfDB.child(pKey).remove()
    },
    fnSaveEdit(pItem){
      const pKey = pItem['.key']
      TodosInfDB.child(pKey).set({
        todoValue: pItem.todoValue,
        b_edit:false,
        b_completed: pItem.b_completed
      })

    },
    fnCancelEdit(pkey){
      TodosInfDB.child(pkey).update({
        b_edit: false
      })
    }
  }
};
</script>

<style scoped>
.style-completed{
  text-decoration: line-through;
  color: #777;
}
</style>