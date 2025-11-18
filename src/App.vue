<template>
  <div class="app" :style="{ backgroundColor: siteTheme }">
    <header class="app__header">
      <h1 class="app__title">Pomodoro Timer</h1>
    </header>
    <main class="app__main">
      <Timer @timeUp="onThemeChange" />
    </main>
  </div>
</template>

<script>
import moment from 'moment';
import Timer from './components/Timer.vue';

export default {
  components: {
    Timer,
  },
  data() {
    return {
      siteTheme: '#a83232',
    };
  },
  mounted() {
    localStorage.start = moment().format('YYYY/MM/DD HH:mm:ss Z');
    localStorage.pomodoro = 0;
  },
  methods: {
    onThemeChange(isBreakTime) {
      this.siteTheme = isBreakTime ? '#3eab45' : '#a83232';
    },
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
