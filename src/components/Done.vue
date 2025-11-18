<template>
  <button
    type="button"
    class="icon-button icon-button--small"
    :disabled="isBreakTime"
    @click="onDone"
    title="Complete session"
  >
    <span class="mdi mdi-check-bold icon-button__icon" aria-hidden="true"></span>
    <span class="sr-only">Complete session</span>
  </button>
</template>

<script>
export default {
  props: {
    isBreakTime: Boolean,
  },
  methods: {
    onDone() {
      this.$emit('done');
    },
  },
};
</script>
