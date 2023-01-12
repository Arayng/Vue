<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="12" class="text-center">
            <h1 class="title white--text">^_______________^</h1>
            <p class="cpation">by VueJS</p>
            <img src="./assets/logo.png" alt="">
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  created() {
    this.$vuetify.theme.dark = true;
  },
  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
