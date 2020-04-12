<template>
  <v-app id="site" :style="{ 'background-color': siteTheme }">
    <div id="titleBar" >
    </div>
    <v-app-bar app flat color="transparent" >
      <v-spacer></v-spacer>
      <div class="d-flex align-center title  white--text" >
        Pomodoro Timer
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="pt-4">
      <Timer @timeUp="siteThemeChange"/>
    </v-content>

  </v-app>
</template>

<script>
import moment from 'moment'
import Timer from './components/Timer'
export default {
  components: {
    Timer,
  },
  data () {
    return {
      siteTheme: '#a83232',
    }
  },
  mounted() {
    localStorage.start = moment().format('YYYY/MM/DD hh:mm:ss')
    localStorage.pomodoro = 0;
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
    height: 56px;
    background-color: transparent;
    -webkit-app-region: drag; /* ドラッグでwindowの移動可能にする */
    text-align: right;
  }
  main {
    -webkit-app-region: no-drag; /* ドラッグでwindowの移動可能にする */
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
