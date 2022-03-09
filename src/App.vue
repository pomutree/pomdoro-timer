<template>
  <v-app id="site" :style="{ 'background-color': siteTheme }">

    <v-app-bar flat color="transparent">
      <v-btn x-small icon color="white" class="window minimize" fixed @click="minimizeWindow()">
        <v-icon>mdi-window-minimize</v-icon>
      </v-btn>
      <v-btn x-small icon color="white" class="window close" fixed @click="closeWindow()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer />
      <v-app-bar-title class="white--text font-weight-medium">Pomodoro Timer</v-app-bar-title>
      <v-spacer />
    </v-app-bar>
     <v-main>
      <Timer @timeUp="siteThemeChange"/>
    </v-main>
  </v-app>
</template>

<script>
import { ipcRenderer } from 'electron'
import moment from 'moment'
import Timer from './components/Timer'
export default {
  components: {
    Timer,
  },
  data () {
    return {
      mode: 'focus',
      siteTheme: '#a83232',
    }
  },
  mounted() {
    localStorage.start = moment().format('YYYY/MM/DD HH:mm:ss Z')
    localStorage.pomodoro = 0;
  },
  methods: {
    siteThemeChange: function (isBreakTime) {
      this.mode = isBreakTime ? 'break' : 'focus'
      this.siteTheme = isBreakTime ? '#3eab45' : '#a83232'
    },
    closeWindow () {
      if (this.mode == 'focus') {
        if (!window.confirm("Task is running, are you sure you want to finish?")) return
      }
      ipcRenderer.invoke('closeWindow')
    },
    minimizeWindow () {
      ipcRenderer.invoke('minimizeWindow')
    }
  },
};
</script>

<style lang="scss">
  // #titleBar {
  //   height: 56px;
  //   background-color: transparent;
  //   -webkit-app-region: drag; /* ドラッグでwindowの移動可能にする */
  //   text-align: right;
  // }
  .v-toolbar__content {
    cursor: default;
    -webkit-user-select: none;
    user-select: none;
    -webkit-app-region: drag; /* ドラッグでwindowの移動可能にする */
  }
  // main {
  //   -webkit-app-region: no-drag; /* ドラッグでwindowの移動可能にする */
  // }
  ::-webkit-scrollbar {
    display: none;
  }
  // ボタンのフォーカスが残るのを回避する
  .v-btn:before {
    opacity: 0 !important;
  }
  button.window {
    -webkit-app-region: no-drag;
    z-index: 100;
    top: 5px;
    &.close { right: 7px; }
    &.minimize { right: 28px; }
  }
</style>
