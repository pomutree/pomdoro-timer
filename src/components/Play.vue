<template>
  <v-col cols=4>
    <v-btn text x-large fab outlined dark @click="toggleTimer" class="btn-md" :disabled="isCountUp">
      <span v-if="isTimerActive" class="flex-center">
        <v-icon class="white--text">mdi-pause</v-icon>
      </span>
      <span v-else class="flex-center">
        <v-icon class="white--text">mdi-play</v-icon>
      </span>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  props: {
    isTimerActive: Boolean,
    isCountUp: Boolean,
  },
  methods: {
    toggleTimer: function() {
      this.$emit('play')
    },
  },
};
</script>
