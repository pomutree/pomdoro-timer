<template>
  <v-col cols=3>
    <div class="align-center">
      <v-btn text small fab outlined dark color="white" title="settings" @click="sheet=true" class="btn-sm" :disabled="isTimerActive">
        <v-icon class="white--text">mdi-cog</v-icon>
      </v-btn>
    </div>
    <div>
      <v-bottom-sheet v-model="sheet" persistent scrollable>
        <v-card class="text-center" >
          <v-card-text class="pa-0">
            <h2 class="py-2 black--text">Settings</h2>
            <v-card class="mx-1 mb-4">
              <v-card-title>Timer</v-card-title>
              <SettingTimer
                :sliderWork.sync="sliderWork"
                :sliderShortBreak.sync="sliderShortBreak"
                :sliderLongBreak.sync="sliderLongBreak"
              />
            </v-card>
            <v-btn class="my-6" color="error" @click="toggleSave">close</v-btn>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </div>
  </v-col>
</template>

<script>
import SettingTimer from '@/components/settings/Timer'
export default {
  components: {
    SettingTimer
  },
  data: () => ({
    sheet: false,
    sliderWork: 25,
    sliderShortBreak: 5,
    sliderLongBreak: 15,
  }),
  props: {
    isTimerActive: Boolean,
  },
  methods: {
    async toggleSave () {
      this.sheet=false
      this.$emit('timerSettings', this.sliderWork, this.sliderShortBreak, this.sliderLongBreak)
    },
  },
};
</script>
