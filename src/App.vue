<template>
  <v-app id="site" v-bind:style="{ 'background-color': siteTheme }">
    <div id="titleBar" >
    </div>
    <v-app-bar id="title-bar" app flat color="transparent">
      <div class="d-flex align-center title white--text" >
        Pomodoro Timer
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <v-icon class="white--text">mdi-settings</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <Timer @timeUp="siteThemeChange"/>
    </v-content>

  </v-app>
</template>

<script>
import Timer from './components/Timer';

export default {
  name: 'App',

  components: {
    Timer,
  },

  data () {
    return {
      siteTheme: '#a83232'
    }
  },
  methods: {
    siteThemeChange: function (isBreakTime) {
      this.siteTheme = isBreakTime ? '#3eab45' : '#a83232'
    },
  },
};
</script>

<style lang="scss">
  #titleBar {
    height: 15px;
    background-color: transparent;
    -webkit-app-region: drag; /* ドラッグでwindowの移動可能にする */
    text-align: right;
  }
  // #closed {
  //   margin: 5px;
  //   background-color: blue;
  // }
  main {
    -webkit-app-region: no-drag; /* ドラッグでwindowの移動可能にする */
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
