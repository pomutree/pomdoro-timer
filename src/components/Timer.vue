<template>
  <section class="timer-section">
    <div class="timer">
      <span class="timer__session">{{ sessionLabel }}</span>
      <span class="timer__countdown">{{ displayTime }}</span>
    </div>

    <div class="controls">
      <div class="controls__grid">
        <Reset @reset="reset" />
        <Play @play="play" :isTimerActive="isTimerActive" :isCountUp="isCountUp" />
        <Information />
        <Done @done="done" :isBreakTime="isBreakTime" />
        <StopWatch @stopWatch="stopWatch" :isTimerActive="isTimerActive" :isBreakTime="isBreakTime" />
        <TimerSettings @timerSettings="timerSettings" :isTimerActive="isTimerActive" />
      </div>
    </div>
  </section>
</template>

<script>
import Reset from './Reset.vue';
import Play from './Play.vue';
import Information from './Information.vue';
import Done from './Done.vue';
import StopWatch from './StopWatch.vue';
import TimerSettings from './TimerSettings.vue';

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
      isCountUp: false,
      isBreakTime: false,
      isTimerActive: false,
      isOverHour: false,
      hour: 0,
      minutes: '25',
      seconds: '00',
      timer: null,
    };
  },
  computed: {
    displayTime() {
      if (this.isOverHour) {
        const hours = String(this.hour).padStart(2, '0');
        return `${hours}:${this.minutes}:${this.seconds}`;
      }

      return `${this.minutes}:${this.seconds}`;
    },
    sessionLabel() {
      return this.isBreakTime ? 'break' : 'work';
    },
  },
  beforeUnmount() {
    this.stopTimer();
  },
  methods: {
    play() {
      this.isCountUp = false;
      this.toggleTimer();
    },
    stopWatch() {
      this.stopTimer();
      this.hour = 0;
      this.minutes = '00';
      this.seconds = '00';
      this.isOverHour = false;
      this.isCountUp = true;
      this.toggleTimer();
    },
    reset() {
      const wasActive = this.isTimerActive;
      this.stopTimer();
      if (!wasActive) {
        this.isBreakTime = !this.isBreakTime;
      }
      this.minutes = this.isBreakTime ? this.initShortBreak : this.initWork;
      this.seconds = '00';
      this.isOverHour = false;
      this.isCountUp = false;
      this.$emit('timeUp', this.isBreakTime);
    },
    done() {
      if (this.isBreakTime) {
        return;
      }

      this.stopTimer();

      if (this.isCountUp) {
        const totalMinutes = Number(this.minutes) + this.hour * 60;
        let pomodoro = Math.floor(totalMinutes / 30);
        if (totalMinutes % 30 > 15) {
          pomodoro += 1;
        }
        localStorage.pomodoro = Number(localStorage.pomodoro) + pomodoro;
      } else {
        localStorage.pomodoro = Number(localStorage.pomodoro) + 1;
      }

      this.minutes = this.initShortBreak;
      this.seconds = '00';
      this.isBreakTime = true;
      this.isOverHour = false;
      this.isCountUp = false;
      this.$emit('timeUp', this.isBreakTime);
    },
    timerSettings(work, shortBreak, longBreak) {
      this.initWork = work < 10 ? `0${work}` : `${work}`;
      this.initShortBreak = shortBreak < 10 ? `0${shortBreak}` : `${shortBreak}`;
      this.initLongBreak = longBreak < 10 ? `0${longBreak}` : `${longBreak}`;
      this.minutes = this.isBreakTime ? this.initShortBreak : this.initWork;
      this.seconds = '00';
      this.stopTimer();
    },
    toggleTimer() {
      if (this.isTimerActive) {
        this.stopTimer();
        return;
      }

      this.timer = window.setInterval(
        this.isCountUp ? this.countUp : this.countDown,
        1000,
      );
      this.isTimerActive = true;
    },
    countDown() {
      const currentSeconds = Number(this.seconds);
      const currentMinutes = Number(this.minutes);
      const wasBreak = this.isBreakTime;

      if (currentSeconds === 0) {
        if (currentMinutes === 0) {
          if (!wasBreak) {
            localStorage.pomodoro = Number(localStorage.pomodoro) + 1;
          }

          this.seconds = '00';
          if (!wasBreak) {
            if (Number(localStorage.pomodoro) % 4 === 0) {
              this.minutes = this.initLongBreak;
            } else {
              this.minutes = this.initShortBreak;
            }
          } else {
            this.minutes = this.initWork;
          }

          this.isBreakTime = !wasBreak;
          this.$emit('timeUp', this.isBreakTime);
          this.stopTimer();
          void this.notify(wasBreak ? 'Break' : 'Work', 'time up !!');
          new Audio('/se_maoudamashii_jingle04.mp3').play();
        } else {
          const nextMinutes = currentMinutes - 1;
          this.minutes = nextMinutes < 10 ? `0${nextMinutes}` : `${nextMinutes}`;
          this.seconds = '59';
        }
      } else {
        const nextSeconds = currentSeconds - 1;
        this.seconds = nextSeconds < 10 ? `0${nextSeconds}` : `${nextSeconds}`;
      }
    },
    countUp() {
      const currentSeconds = Number(this.seconds);
      const currentMinutes = Number(this.minutes);

      if (currentSeconds === 59) {
        if (currentMinutes === 59) {
          this.isOverHour = true;
          this.hour += 1;
          this.minutes = '00';
          this.seconds = '00';
        } else {
          const nextMinutes = currentMinutes + 1;
          this.minutes = nextMinutes < 10 ? `0${nextMinutes}` : `${nextMinutes}`;
          this.seconds = '00';
        }
      } else {
        const nextSeconds = currentSeconds + 1;
        this.seconds = nextSeconds < 10 ? `0${nextSeconds}` : `${nextSeconds}`;
      }
    },
    stopTimer() {
      if (this.timer !== null) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.isTimerActive = false;
    },
    async notify(title, body) {
      const isTauri = typeof window !== 'undefined' && '__TAURI__' in window;

      try {
        if (isTauri) {
          const notification = await import('@tauri-apps/api/notification');
          let permissionGranted = await notification.isPermissionGranted();
          if (!permissionGranted) {
            const permission = await notification.requestPermission();
            permissionGranted = permission === 'granted';
          }
          if (permissionGranted) {
            await notification.sendNotification({ title, body });
          }
          return;
        }

        if (typeof Notification !== 'undefined') {
          if (Notification.permission !== 'granted') {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
              return;
            }
          }
          new Notification(title, { body });
        }
      } catch (error) {
        console.warn('Notification failed:', error);
      }
    },
  },
};
</script>

<style scoped>
.controls {
  width: 100%;
}
</style>
