<template>
  <v-app>
    <div id="titleBar" >
      <!-- <v-button id="closed" max-width="10" >×</v-button> -->
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
      <Timer/>
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

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  #app { background-color: #d9534f; }
  #titleBar {
    height: 15px;
    background-color: transparent;
    -webkit-app-region: drag; /* ドラッグでwindowの移動可能にする */
    text-align: right;
  }
  #closed {
    margin: 5px;
    background-color: blue;
  }
  main {
    -webkit-app-region: no-drag; /* ドラッグでwindowの移動可能にする */
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
