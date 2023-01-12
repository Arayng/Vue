<template>
  <v-app>
    <v-card fluid fill-height>
      <v-app-bar dark color="#002469">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>연습용 ToDo리스트</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <v-container>
          <v-row class="my-5">
            <v-col cols="8" offset="1">
              <v-text-field label="toDo" autofocus v-model="toDoTitle"></v-text-field>
            </v-col>
            <v-col cols="2" my-2 class="d-flex align-center">
              <v-btn color="#002469" dark fluid>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-list two-line v-for="i in toDos" :key="i.key"></v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    toDos:[
      {
        key: 0,
        value: 'sample',
        date: new Date()
      }
    ]
  }),
};
</script>
