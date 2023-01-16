<template>
  <div id="app">
    <v-app-bar app color="#adb5bd" fixed>
      <v-app-bar-nav-icon ></v-app-bar-nav-icon>
      <v-toolbar-title>K gallery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" v-for="i in this.kPicturs" :key="i.key">
            <v-card height="330px">
              <v-img :src="i.url" height="200px"></v-img>
              <v-card-title>
                <h1 class="title grey--text text--darken-3 mb-3">{{ i.title }}</h1>
                <p class="body-2 grey--text">{{ i.info }}</p>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>

    </v-footer>
  </div>
</template>

<script>
import DataSources from './datasources/picture-data'

export default {
  name: 'App',
  data(){
    return {
      kPicturs : DataSources.pictures
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
