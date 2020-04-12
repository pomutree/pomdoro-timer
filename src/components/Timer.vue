<template>
  <v-container id="site-container" fluid>
    <div class="timer">
      <span class="timer-ssession js-session white--text">{{ isBreakTime ? 'break' : 'work' }}</span>
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
        <TimerSettings @timerSettings="timerSettings" :isTimerActive="isTimerActive"/>
      </v-row >
    </div>

  </v-container>

</template>

<script>
import Reset from './Reset'
import Play from './Play'
import Information from './Information'
import Done from './Done'
import StopWatch from './StopWatch'
import TimerSettings from './TimerSettings'
export default {
  components: {
    Reset,
    Information,
    Play,
    Done,
    StopWatch,
    TimerSettings,
  },
  data() {
    return {
      initWork: '25',
      initShortBreak: '05',
      initLongBreak: '15',

      // App state
      isCountUp: false,
      isBreakTime: false,
      isTimerActive: false,
      isOverHour: false,
      hour: 0,
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
            // pomodoro count up
            if (!self.isBreakTime) localStorage.pomodoro = Number(localStorage.pomodoro)+1;
            // Count Reset
            self.seconds = '00'
            if (!isBreak) {
              if (Number(localStorage.pomodoro)%4 == 0) {
                self.minutes = self.initLongBreak
              } else {
                self.minutes = self.initShortBreak
              }
            } else {
              self.minutes = self.initWork
            }
            self.isBreakTime = !self.isBreakTime;
            self.$emit('timeUp', self.isBreakTime);
            clearInterval(self.timer)
            // notification
            let title = isBreak ? "Break" : "Work"
            var notification = new Notification(title, {body: 'time up !!'})
            self.isTimerActive = !self.isTimerActive
            new Audio('/se_maoudamashii_jingle04.mp3').play()
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
            self.hour++
            self.minutes = '00'
            self.seconds = '00'
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
      this.hour = 0
      this.minutes = '00'
      this.seconds = '00'
      this.isOverHour = false
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
      // pomodoro count
      if (this.isCountUp) {
        let total_minutes = Number(this.minutes) + Number(this.hour*60)
        let pomodoro = Math.floor(total_minutes/30)
        if (total_minutes%30 > 15) pomodoro++
        localStorage.pomodoro = Number(localStorage.pomodoro)+pomodoro
      } else {
        localStorage.pomodoro = Number(localStorage.pomodoro)+1
      }
      // timer reset
      this.minutes = this.initShortBreak
      this.isTimerActive = false;
      this.isCountUp = false
      this.isOverHour = false
      this.seconds = '00';
      this.isBreakTime = true
      this.$emit('timeUp', this.isBreakTime);
    },
    timerSettings: function(Work, ShortBreak, LongBreak)  {
      Work < 10 ? this.initWork = String(`0${Work}`) : this.initWork = String(`${Work}`)
      ShortBreak < 10 ? this.initShortBreak = String(`0${ShortBreak}`) : this.initShortBreak = String(`${ShortBreak}`)
      LongBreak < 10 ? this.initLongBreak = String(`0${LongBreak}`) : this.initLongBreak = String(`${LongBreak}`)
      this.isBreakTime ? this.minutes = this.initShortBreak : this.minutes = this.initWork;
      this.seconds = '00';
      clearInterval(this.timer);
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
