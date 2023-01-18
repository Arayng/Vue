<template>
  <v-app>
    <v-navigation-drawer clipped v-model="drawer" app>
      <v-list>
        <v-list-item value="true" v-for="(item, i) in fnGetMenuItems" :to="item.to" :key="i">
          <v-list-item-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
        <v-list-item @click="fnDoLogout" v-if="fnGetAuthStatus">
          <v-list-item-action>
            <v-icon>mdi-arrow-right-bold-box-outline</v-icon>
          </v-list-item-action>
          <v-list-itme-title>LogOUT</v-list-itme-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon @clikc.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <router-link to="/" style="cursor:pointer">
        <v-icon class="hidden-xs-only" large color="teal lighten-4">mdi-home</v-icon>
      </router-link>
      <v-toolbar-title class="headline">firebase 인증 로그인</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in fnGetMenuItems" :key="item.title" :to="item.to">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text @clikc="fnDoLogout" v-if="fnGetAuthStatus">
          <v-icon left>mdi-arrow-right-bold-box-outline</v-icon>
          로그아웃
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer app>
      <div class="mx-auto">&copy; VueJS</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {},
  methods: {},
};
</script>
