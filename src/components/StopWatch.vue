<template>
  <v-col cols=3>
    <v-btn text small fab outlined dark title="count up timer" @click="stopWatch" class="btn-md" :disabled="isTimerActive || isBreakTime">
      <v-icon class="white--text">mdi-camera-timer </v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  props: {
    isBreakTime: Boolean,
    isTimerActive: Boolean,
  },
  methods: {
    stopWatch: function() {
      this.$emit('stopWatch')
    },
  },
};
</script>
