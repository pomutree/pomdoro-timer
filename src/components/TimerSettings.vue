<template>
  <v-col cols=3>
    <div class="align-center">
      <v-btn text small fab outlined dark color="white" title="settings" @click="sheet=true" class="btn-sm" :disabled="isTimerActive">
        <v-icon class="white--text">mdi-settings</v-icon>
      </v-btn>
    </div>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" persistent>
        <v-sheet class="text-center">
          <v-card-text>
            <div class="title">Work</div>
            <div class="body-2">{{ sliderWork }}</div>
            <v-slider
              v-model="sliderWork"
              color="gray"
              track-color="gray"
              thumb-color="error"
              class="align-center"
              :max="max"
              :min="min"
            ></v-slider>
          </v-card-text>

          <v-card-text>
            <div class="title">Short break</div>
            <div class="body-2">{{ sliderShortBreak }}</div>
            <v-slider
              v-model="sliderShortBreak"
              color="gray"
              track-color="gray"
              thumb-color="error"
              class="align-center"
              :max="max"
              :min="min"
            ></v-slider>
          </v-card-text>

          <v-card-text>
            <div class="title">Long break</div>
            <div class="body-2">{{ sliderLongBreak }}</div>
            <v-slider
              v-model="sliderLongBreak"
              color="gray"
              track-color="gray"
              thumb-color="error"
              class="align-center"
              :max="max"
              :min="min"
            ></v-slider>
          </v-card-text>

          <v-btn class="mt-6" color="error" @click="toggleSave">close</v-btn>
          <br>
          <br>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-col>
</template>

<script>
export default {
  data: () => ({
    sheet: false,
    sliderWork: 25,
    sliderShortBreak: 5,
    sliderLongBreak: 15,
    min: 1,
    max: 60,
  }),
  props: {
    isTimerActive: Boolean,
  },
  methods: {
    toggleSave: function() {
      this.sheet=false
      this.$emit('timerSettings', this.sliderWork, this.sliderShortBreak, this.sliderLongBreak)
    },
  },
};
</script>
