<template>
  <v-container id="site-container" fluid>
    <div class="timer">
      <span class="font-weight-medium white--text">{{ isBreakTime ? 'break' : 'work' }}</span>
      <span class="timer-countdown white--text" v-if="isOverHour" >{{`${hour}:${minutes}:${seconds}`}}</span>
      <span class="timer-countdown white--text" v-else >{{`${minutes}:${seconds}`}}</span>
    </div>

    <div class="controllers">
      <v-row class="control-btn" justify="center" align-content="center">
        <Reset @reset="reset"/>
        <Play @play="play" :isTimerActive="isTimerActive" :isCountUp="isCountUp"/>
        <Information />
        <Done @done="done" :isBreakTime="isBreakTime"/>
        <StopWatch @stopWatch="stopWatch" :isTimerActive="isTimerActive" :isBreakTime="isBreakTime"/>
        <TimerSettings @timerSettings="timerSettings" :isTimerActive="isTimerActive"/>
        <v-col cols=3>
          <v-btn text small fab outlined dark title="done" @click="duplicate" class="btn-sm">
            <v-icon class="white--text">mdi-content-duplicate</v-icon>
          </v-btn>
        </v-col>
      </v-row >
    </div>

  </v-container>

</template>

<script>
import { ipcRenderer } from 'electron'
import Reset from './Reset'
import Play from './Play'
import Information from './Information'
import Done from './Done'
import StopWatch from './StopWatch'
import TimerSettings from '@/components/settings/General'
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
      const countDown = () => {
        let seconds = Number(this.$data.seconds);
        let minutes = Number(this.$data.minutes);
        let isBreak = this.isBreakTime;
        if (seconds === 0) {
          if (minutes === 0) {
            // pomodoro count up
            if (!this.isBreakTime) localStorage.pomodoro = Number(localStorage.pomodoro)+1;
            // Count Reset
            this.seconds = '00'
            if (!isBreak) {
              if (Number(localStorage.pomodoro)%4 == 0) {
                this.minutes = this.initLongBreak
              } else {
                this.minutes = this.initShortBreak
              }
            } else {
              this.minutes = this.initWork
            }
            this.isBreakTime = !this.isBreakTime;
            this.$emit('timeUp', this.isBreakTime);
            clearInterval(this.timer)
            // notification
            let title = isBreak ? "Break" : "Work"
            new Notification(title, {body: 'time up !!'})
            this.isTimerActive = !this.isTimerActive
            new Audio('/se_maoudamashii_jingle04.mp3').play()
          } else {
            minutes <= 10 ? this.minutes = `0${minutes - 1}` : this.minutes = `${minutes - 1}`;
            this.seconds = '59';
          }
        } else {
          seconds <= 10 ? this.seconds = `0${seconds - 1}` : this.seconds = `${seconds - 1}`;
        }
      }
      const countUp = () => {
        let seconds = Number(this.$data.seconds);
        let minutes = Number(this.$data.minutes);
        if (seconds === 59) {
          if (minutes === 59) {
            this.isOverHour = true
            this.hour++
            this.minutes = '00'
            this.seconds = '00'
          } else {
            minutes <= 10 ? this.minutes = `0${minutes + 1}` : this.minutes = `${minutes + 1}`;
            this.seconds = '00';
          }
        } else {
          seconds < 9 ? this.seconds = `0${seconds + 1}` : this.seconds = `${seconds + 1}`;
        }
      }

      if (this.isCountUp) {
        this.isTimerActive ? clearInterval(this.timer) : this.timer = setInterval(countUp, 1000);
      } else {
        this.isTimerActive ? clearInterval(this.timer) : this.timer = setInterval(countDown, 1000);
      }
      this.isTimerActive = !this.isTimerActive;
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
    duplicate () {
      this.isTimerActive = false;
      clearInterval(this.timer);
      ipcRenderer.send('duplicateMainWindow')
    }
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
  .timer-countdown { font-size: 2.5rem; }

</style>
