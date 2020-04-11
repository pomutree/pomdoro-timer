<template>
  <v-col cols=3>
    <v-btn text small fab outlined @click="done" class="btn-sm" :disabled="isBreakTime">
      <v-icon class="white--text">mdi-check-bold</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  props: {
    isBreakTime: Boolean,
  },
  methods: {
    done: function() {
      this.$emit('done')
    },
  },
};
</script>
