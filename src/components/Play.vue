<template>
  <button
    type="button"
    class="icon-button"
    :disabled="isCountUp"
    @click="onToggle"
    :title="isTimerActive ? 'Pause timer' : 'Start timer'"
  >
    <span class="mdi icon-button__icon" :class="icon" aria-hidden="true"></span>
    <span class="sr-only">{{ isTimerActive ? 'Pause timer' : 'Start timer' }}</span>
  </button>
</template>

<script>
export default {
  props: {
    isTimerActive: Boolean,
    isCountUp: Boolean,
  },
  computed: {
    icon() {
      return this.isTimerActive ? 'mdi-pause' : 'mdi-play';
    },
  },
  methods: {
    onToggle() {
      this.$emit('play');
    },
  },
};
</script>
