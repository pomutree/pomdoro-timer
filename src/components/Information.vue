<template>
  <v-col cols=4>
    <div style="height: 0.5rem;"></div>
    <v-btn text fab outlined class="btn-sm" @click="toggleModal">
      <v-icon class="white--text">mdi-information-outline</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  // data () {
  //   return { msg: 'hello' }
  // },
  methods: {
    toggleModal: function() {
      // this.isModalOpen = !this.isModalOpen;
      alert("electron version: " + process.versions.electron + "\n" +
        "vue version: " + require('../../package.json').dependencies.vue + "\n" +
        "system version: " + process.getSystemVersion()
      );
    },
  },
};
</script>
