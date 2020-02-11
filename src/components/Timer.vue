<template>
  <v-container id="site-container" fluid>
    <transition name="modal">
     <v-row no-gutters>
        <div class="timer">
          <span class="timer-ssession js-session white--text">{{ isBreakTime ? 'break' : 'work' }}</span>
          <span class="timer-countdown js-countdown white--text">{{`${minutes}:${seconds}`}}</span>
        </div>
      </v-row >
    </transition>


    <div class="controllers">
      <v-row class="control-btn" justify="center" align-content="center">

        <!-- <v-col cols=4 class="red lighten-3"> -->
        <v-col cols=4>
          <div style="height: 0.5rem;"></div>
          <v-btn text fab outlined @click="reset" class="btn-sm">
            <v-icon class="white--text">mdi-replay</v-icon>
          </v-btn>
        </v-col>

        <!-- <v-col cols=4 class="blue lighten-3"> -->
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

        <!-- <v-col cols=4 class="green lighten-3"> -->
        <v-col cols=4>
          <div style="height: 0.5rem;"></div>
          <div class="align-center">
            <v-btn text fab outlined title="info" class="btn-sm" @click="toggleModal">
              <v-icon class="white--text">mdi-information-outline</v-icon>
            </v-btn>
          </div>
        </v-col>

      </v-row >

      <!-- <app-modal v-if="isModalOpen" @close="closeModal">
        <h3 slot="header">Pomodoro</h3>
        <p slot="body">The pomodoro technique is a time management method that uses a timer to break down work into intervals separated by short breaks.</p>
      </app-modal> -->

    </div>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      // Settings
      initWork: 25,
      initShortBreak: 5,

      // App state
      isBreakTime: false,
      isTimerActive: false,
      minutes: 25,
      seconds: '00',
      timer: null,
      round: 0,

      // UI
      isModalOpen: false,
    }
  },
  methods: {
    toggleTimer: function() {
      let self = this;
      function countDown() {
        let seconds = Number(self.$data.seconds);
        let minutes = self.minutes;
        let isBreak = self.isBreakTime;

        if (seconds === 0) {
          if (minutes === 0) {
            // Count up
            self.seconds = '00'
            isBreak ? self.minutes = self.initWork : self.minutes = self.initShortBreak;
            self.isBreakTime = !self.isBreakTime;
            self.$emit('timeUp', self.isBreakTime);
            clearInterval(self.timer)
            // notification
            let title = isBreak ? "Break" : "Work"
            var notification = new Notification(title, {body: 'time up !!'})
            self.isTimerActive = !self.isTimerActive
          } else { // Remove minute + start counting down from 60 seconds again
            self.minutes--;
            self.seconds = '59';
          }
        } else { // Remove seconds + if less than 10 prepend 0
          seconds <= 10 ? self.seconds = `0${self.seconds - 1}` : self.seconds = `${self.seconds - 1}`;
        }
      }
      self.isTimerActive ? clearInterval(self.timer) : self.timer = setInterval(countDown, 1000);
      self.isTimerActive = !self.isTimerActive;
      // this.$emit('event');
    },
    // resetSettings() {
    //   this.initWork= 25;
    //   this.initShortBreak= 5;
    //   this.isBreakTime ? this.minutes = this.initShortBreak : this.minutes = this.initWork;
    // },
    // resetUI() {
    //   this.isBreakTime = false;
    //   this.isTimerActive = false;
    //   this.minutes = this.initWork;
    //   this.seconds = '00';
    //   clearInterval(this.timer);
    // },
    reset: function() {
      this.initWork= 25;
      this.initShortBreak= 5;
      this.isBreakTime ? this.minutes = this.initShortBreak : this.minutes = this.initWork;
      this.isBreakTime = false;
      this.isTimerActive = false;
      this.minutes = this.initWork;
      this.seconds = '00';
      this.$emit('timeUp', this.isBreakTime);
      clearInterval(this.timer);
    },
    toggleModal: function() {
      this.isModalOpen = !this.isModalOpen;
      alert("electron version: " + process.versions.electron + "\n" +
        "vue version: " + require('../../package.json').dependencies.vue + "\n" +
        "system version: " + process.getSystemVersion()
      );
    },
  },
}
</script>

<style lang="scss">
  .align-center {
    text-align: center;
  }
  #site-container {
    width: 300px;
  }
  .control-btn {
    text-align: center;
    height: 160px;
  }
  // Main
  .timer {
    text-align: center;
    position: relative;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    width: 224px;
    height: 224px;
    border: 4px solid white;
    border-radius: 50%;
    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      border: 1px solid rgba(255, 255, 255, .25);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
    &::before {
      width: 120%;
      height: 120%;
    }
    &::after {
      width: 80%;
      height: 80%;
    }
  }
  .timer-ssession { font-weight: 500; }
  .timer-countdown { font-size: 2.5rem; }

  // .btn-sm {
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex: 0 0 auto;
  //   width: calc(3rem + 4px);
  //   height: calc(3rem + 4px);
  //   line-height: 3rem;
  //   border: 2px solid rgba(255, 255, 255, .25);
  //   border-radius: 50%;
  // }
  // // Controllers
  // .btn-md {
  //   margin: 0 auto;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   flex: 0 0 auto;
  //   width: calc(4rem + 4px);
  //   height: calc(4rem + 4px);
  //   line-height: 3rem;
  //   border: 2px solid rgba(255, 255, 255, .25);
  //   border-radius: 50%;
  // }
  //
  // .btn-sm:hover,
  // .btn-md:hover {
  //   border-color: #fff;
  // }
  // helper
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
</style>
