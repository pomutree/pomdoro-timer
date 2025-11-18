<template>
  <button
    type="button"
    class="icon-button"
    :disabled="isTimerActive || isBreakTime"
    @click="onStopWatch"
    title="Start stopwatch"
  >
    <span class="mdi mdi-camera-timer icon-button__icon" aria-hidden="true"></span>
    <span class="sr-only">Start stopwatch</span>
  </button>
</template>

<script>
export default {
  props: {
    isBreakTime: Boolean,
    isTimerActive: Boolean,
  },
  methods: {
    onStopWatch() {
      this.$emit('stopWatch');
    },
  },
};
</script>
