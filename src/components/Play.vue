<template>
  <v-col cols=4>
    <v-btn text x-large fab outlined @click="toggleTimer" class="btn-md">
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
    initWork: Number,
    initShortBreak: Number,
    isBreakTime: Boolean,
    isTimerActive: Boolean,
    minutes: Number,
    seconds: String,
    timer: Object,
    round: Number,
  },
  methods: {
    toggleTimer: function() {
      let self = this
      console.log(this.initWork);
      console.log(this.initShortBreak);
      // countDown() {
      //   let seconds = Number(t.$data.seconds);
      //   let minutes = this.minutes;
      //   let isBreak = this.isBreakTime;
      //   if (seconds === 0) {
      //     if (minutes === 0) {
      //       // Count up
      //       this.seconds = '00'
      //       isBreak ? this.minutes = this.initWork : this.minutes = this.initShortBreak;
      //       this.isBreakTime = !this.isBreakTime;
      //       this.$emit('timeUp', this.isBreakTime);
      //       clearInterval(this.timer)
      //       // notification
      //       let title = isBreak ? "Break" : "Work"
      //       var notification = new Notification(title, {body: 'time up !!'})
      //       this.isTimerActive = !this.isTimerActive
      //     } else { // Remove minute + start counting down from 60 seconds again
      //       this.minutes--;
      //       this.seconds = '59';
      //     }
      //   } else { // Remove seconds + if less than 10 prepend 0
      //     seconds <= 10 ? this.seconds = `0${this.seconds - 1}` : this.seconds = `${this.seconds - 1}`;
      //   }
      // },
      // this.isTimerActive ? clearInterval(this.timer) : this.timer = setInterval(this.countDown(), 1000);
      // this.isTimerActive = !this.isTimerActive;
    },
  },
};
</script>
