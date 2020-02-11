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

        <v-col cols=3>
          <div style="height: 0.5rem;"></div>
          <!-- <v-btn text class="btn-sm"> -->
          <!-- <v-btn text @click="reset" title="reset" class="btn-sm"> -->
          <v-btn text @click="reset" class="btn-sm">
            <svg width="16" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4.023c4.398 0 8 3.556 8 7.954 0 4.397-3.602 8-8 8s-8-3.603-8-8h2.012A5.97 5.97 0 0 0 8 17.965a5.97 5.97 0 0 0 5.988-5.988A5.97 5.97 0 0 0 8 5.988v4.024L2.994 5.006 8 0v4.023z" fill="#FFF" fill-rule="nonzero"/></svg>
          </v-btn>
        </v-col>

        <v-col cols=4>
          <v-btn text @click="toggleTimer" class="btn-md">
            <!-- <span class="flex-center"> -->
            <span v-if="isTimerActive" class="flex-center">
              <svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.016.016H12v13.968H8.016V.016zM0 13.984V.016h3.984v13.968H0z" fill="#FFF" fill-rule="nonzero"/></svg>
            </span>
            <!-- <span class="flex-center"> -->
            <span v-else class="flex-center">
              <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l14 9-14 9z" fill="#FFF" fill-rule="nonzero"/></svg>
            </span>
          </v-btn>
        </v-col>

        <v-col cols=3>
          <div style="height: 0.5rem;"></div>
          <v-btn text title="info" class="btn-sm" @click="toggleModal">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.016 7V4.984h1.968V7H9.016zM10 18.016c4.406 0 8.016-3.61 8.016-8.016 0-4.406-3.61-8.016-8.016-8.016-4.406 0-8.016 3.61-8.016 8.016 0 4.406 3.61 8.016 8.016 8.016zm0-18A9.963 9.963 0 0 1 19.984 10 9.963 9.963 0 0 1 10 19.984 9.963 9.963 0 0 1 .016 10 9.963 9.963 0 0 1 10 .016zm-.984 15v-6h1.968v6H9.016z" fill="#FFF" fill-rule="nonzero"/></svg>
          </v-btn>
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

  .btn-sm {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: calc(3rem + 4px);
    height: calc(3rem + 4px);
    line-height: 3rem;
    border: 2px solid rgba(255, 255, 255, .25);
    border-radius: 50%;
  }
  // Controllers
  .btn-md {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: calc(4rem + 4px);
    height: calc(4rem + 4px);
    line-height: 3rem;
    border: 2px solid rgba(255, 255, 255, .25);
    border-radius: 50%;
  }

  .btn-sm:hover,
  .btn-md:hover {
    border-color: #fff;
  }
  // helper
  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
  }
</style>
