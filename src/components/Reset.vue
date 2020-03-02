<template>
  <v-col cols=4>
    <div style="height: 0.5rem;"></div>
    <v-btn text fab outlined @click="reset" class="btn-sm">
      <v-icon class="white--text">mdi-replay</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  methods: {
    reset: function() {
      this.$emit('reset')
    },
  },
};
</script>
