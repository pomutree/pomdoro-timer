<template>
  <v-container id="site-container" fluid>
    <div class="timer">
      <span class="timer-ssession js-session white--text">{{ isBreakTime ? 'break' : 'work' }}</span>

      <!-- <span class="timer-countdown js-countdown white--text">{{`${hour}:${minutes}:${seconds}`}}</span> -->
      <span class="timer-countdown js-countdown white--text" v-if="isOverHour" >{{`${hour}:${minutes}:${seconds}`}}</span>
      <span class="timer-countdown js-countdown white--text" v-else >{{`${minutes}:${seconds}`}}</span>

    </div>

    <div class="controllers">
      <v-row class="control-btn" justify="center" align-content="center">
        <Reset @reset="reset"/>
        <Play @play="play" :isTimerActive="isTimerActive" :isCountUp="isCountUp"/>
        <Information />
        <Done @done="done" :isBreakTime="isBreakTime"/>
        <StopWatch @stopWatch="stopWatch" :isTimerActive="isTimerActive" :isBreakTime="isBreakTime"/>
        <!-- <v-col cols=3>
          <v-btn text small fab outlined @click="toggleStopWatch" class="btn-md">
            <v-icon class="white--text">mdi-camera-timer </v-icon>
          </v-btn>
        </v-col> -->
        <!-- <v-col cols=3 class="green lighten-3"> -->
        <v-col cols=3>
          <div class="align-center">
            <v-btn text small fab outlined title="info" class="btn-sm">
              <v-icon class="white--text">mdi-settings</v-icon>
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
import Reset from './Reset'
import Play from './Play'
import Information from './Information'
import Done from './Done'
import StopWatch from './StopWatch'
export default {
  components: {
    Reset,
    Information,
    Play,
    Done,
    StopWatch,
  },
  data() {
    return {
      initWork: '25',
      initShortBreak: '05',

      // App state
      isCountUp: false,
      isBreakTime: false,
      isTimerActive: false,
      isOverHour: false,
      hour: 1,
      minutes: '25',
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
        let minutes = Number(self.$data.minutes);
        let isBreak = self.isBreakTime;
        if (seconds === 0) {
          if (minutes === 0) {
            // Count
            self.seconds = '00'
            isBreak ? self.minutes = self.initWork : self.minutes = self.initShortBreak;
            self.isBreakTime = !self.isBreakTime;
            self.$emit('timeUp', self.isBreakTime);
            clearInterval(self.timer)
            // notification
            let title = isBreak ? "Break" : "Work"
            var notification = new Notification(title, {body: 'time up !!'})
            self.isTimerActive = !self.isTimerActive
          } else {
            minutes <= 10 ? self.minutes = `0${minutes - 1}` : self.minutes = `${minutes - 1}`;
            self.seconds = '59';
          }
        } else {
          seconds <= 10 ? self.seconds = `0${seconds - 1}` : self.seconds = `${seconds - 1}`;
        }
      }
      function countUp() {
        let seconds = Number(self.$data.seconds);
        let minutes = Number(self.$data.minutes);
        let isBreak = self.isBreakTime;
        if (seconds === 59) {
          if (minutes === 59) {
            self.isOverHour = true
            self.minutes = '00'
            self.seconds = '00';
          } else {
            minutes <= 10 ? self.minutes = `0${minutes + 1}` : self.minutes = `${minutes + 1}`;
            self.seconds = '00';
          }
        } else {
          seconds < 9 ? self.seconds = `0${seconds + 1}` : self.seconds = `${seconds + 1}`;
        }
      }

      if (this.isCountUp) {
        self.isTimerActive ? clearInterval(self.timer) : self.timer = setInterval(countUp, 1000);
      } else {
        self.isTimerActive ? clearInterval(self.timer) : self.timer = setInterval(countDown, 1000);
      }
      self.isTimerActive = !self.isTimerActive;
    },
    play: function() {
      this.isCountUp = false
      this.toggleTimer()
    },
    stopWatch: function() {
      this.minutes = '00'
      this.seconds = '00'
      this.isCountUp = true
      this.toggleTimer()
    },
    reset() {
      if (!this.isTimerActive) this.isBreakTime = !this.isBreakTime
      this.isBreakTime ? this.minutes = this.initShortBreak : this.minutes = this.initWork;
      this.isTimerActive = false;
      this.isCountUp = false
      this.isOverHour = false
      this.seconds = '00';
      this.$emit('timeUp', this.isBreakTime);
      clearInterval(this.timer);
    },
    done: function()  {
      if (this.isBreakTime) return
      clearInterval(this.timer);
      this.minutes = this.initShortBreak
      this.isTimerActive = false;
      this.isCountUp = false
      this.isOverHour = false
      this.seconds = '00';
      this.isBreakTime = true
      this.$emit('timeUp', this.isBreakTime);
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
    height: 220px;
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

</style>
