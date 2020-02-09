<template>
  <v-container id="site-container" fluid>
    <transition name="modal">
     <v-row no-gutters>
        <div class="timer">
          <span class="timer-ssession js-session white--text">work</span>
          <!-- <span class="timer-ssession js-session white--text">{{ isBreakTime ? 'break' : 'work' }}</span> -->
          <span class="timer-countdown js-countdown white--text">11111</span>
          <!-- <span class="timer__countdown js-countdown">{{`${minutes}:${seconds}`}}</span> -->
        </div>
      </v-row >
    </transition>


    <div class="controllers">
      <v-row class="control-btn" justify="center" align-content="center">

        <v-col cols=3>
          <div style="height: 0.5rem;"></div>
          <button class="btn-sm">
          <!-- <button @click="reset" title="reset" class="btn-sm"> -->
            <svg width="16" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4.023c4.398 0 8 3.556 8 7.954 0 4.397-3.602 8-8 8s-8-3.603-8-8h2.012A5.97 5.97 0 0 0 8 17.965a5.97 5.97 0 0 0 5.988-5.988A5.97 5.97 0 0 0 8 5.988v4.024L2.994 5.006 8 0v4.023z" fill="#FFF" fill-rule="nonzero"/></svg>
          </button>
        </v-col>

        <v-col cols=4>
          <button class="btn-md">
          <!-- <button @click="toggleTimer" class="btn-md"> -->
            <span class="flex-center">
            <!-- <span v-if="isTimerActive" class="flex-center"> -->
              <svg width="13" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M8.016.016H12v13.968H8.016V.016zM0 13.984V.016h3.984v13.968H0z" fill="#FFF" fill-rule="nonzero"/></svg>
            </span>
            <span class="flex-center">
            <!-- <span v-else class="flex-center"> -->
              <svg width="14" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M0 0l14 9-14 9z" fill="#FFF" fill-rule="nonzero"/></svg>
            </span>
          </button>
        </v-col>

        <v-col cols=3>
          <div style="height: 0.5rem;"></div>
          <button class="btn-sm">
          <!-- <button title="info" class="btn-sm" @click="toggleModal"> -->
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.016 7V4.984h1.968V7H9.016zM10 18.016c4.406 0 8.016-3.61 8.016-8.016 0-4.406-3.61-8.016-8.016-8.016-4.406 0-8.016 3.61-8.016 8.016 0 4.406 3.61 8.016 8.016 8.016zm0-18A9.963 9.963 0 0 1 19.984 10 9.963 9.963 0 0 1 10 19.984 9.963 9.963 0 0 1 .016 10 9.963 9.963 0 0 1 10 .016zm-.984 15v-6h1.968v6H9.016z" fill="#FFF" fill-rule="nonzero"/></svg>
          </button>
        </v-col>

      </v-row >

    </div>
  </v-container>

</template>

<script>
export default {
  name: 'Timer',
  data() {
    return {
      isShown: false
    }
  },
};
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
