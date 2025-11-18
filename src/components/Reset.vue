<template>
  <button type="button" class="icon-button icon-button--small" @click="onReset" title="Reset timer">
    <span class="mdi mdi-replay icon-button__icon" aria-hidden="true"></span>
    <span class="sr-only">Reset timer</span>
  </button>
</template>

<script>
export default {
  methods: {
    onReset() {
      this.$emit('reset');
    },
  },
};
</script>
