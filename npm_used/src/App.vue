<template>
  <v-app>
    <v-app-bar app color="#ffa76d" dark>
      <v-btn icon color="#999">
        <v-avatar color="#eee">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
      </v-btn>
      <v-toolbar-title>Router 공부</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs align-with-title dark>
          <v-tab to="/">Main</v-tab>
          <v-tab to="/sub">Sub</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="menuOn = !menuOn"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer absolute temporary right v-model="menuOn">
        <v-toolbar flat height="70px" class="justify-space-between">
          <v-list>
            <v-list-item @click.stop="">
              <v-list-item-avatar color="#ddd">
                <img alt="">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title">닉네임</v-list-item-title> 
                <v-list-item-subtitle class="caption">로그아웃</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list class="pt-3">
          <v-list-item @click.stop="drawerMenuAction()" to="/">
            <v-list-item-content>메인 페이지</v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-list-item @click.stop="drawerMenuAction()" to="/sub">
            <v-list-item-content>서브 페이지</v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-chevron-right</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    <v-main>
      <!-- vuetify 기능 중 페이지 전환 효과 -->
      <v-scroll-x-reverse-transition mode="out-in">
        <router-view></router-view>
      </v-scroll-x-reverse-transition>
    </v-main>
    <v-footer color="secondary" fixed dark>
      <div class="mx-auto">Create By VueJS</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    menuOn: false,
  }),
  methods: {
    drawerMenuAction(){
        this.menuOn = false
    }
  }
};
</script>

<style>
</style>