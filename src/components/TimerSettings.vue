<template>
  <div>
    <button
      type="button"
      class="icon-button icon-button--small"
      :disabled="isTimerActive"
      @click="open"
      title="Timer settings"
    >
      <span class="mdi mdi-settings icon-button__icon" aria-hidden="true"></span>
      <span class="sr-only">Timer settings</span>
    </button>

    <div v-if="sheet" class="modal-backdrop" @click.self="close">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="settings-title">
        <h2 class="modal__title" id="settings-title">Timer settings</h2>
        <div class="settings">
          <div class="settings__group">
            <label class="settings__label" for="work-slider">Work (minutes)</label>
            <span class="settings__value">{{ sliderWork }}</span>
            <input
              id="work-slider"
              class="settings__slider"
              type="range"
              :min="min"
              :max="max"
              v-model.number="sliderWork"
            />
          </div>

          <div class="settings__group">
            <label class="settings__label" for="short-slider">Short break (minutes)</label>
            <span class="settings__value">{{ sliderShortBreak }}</span>
            <input
              id="short-slider"
              class="settings__slider"
              type="range"
              :min="min"
              :max="max"
              v-model.number="sliderShortBreak"
            />
          </div>

          <div class="settings__group">
            <label class="settings__label" for="long-slider">Long break (minutes)</label>
            <span class="settings__value">{{ sliderLongBreak }}</span>
            <input
              id="long-slider"
              class="settings__slider"
              type="range"
              :min="min"
              :max="max"
              v-model.number="sliderLongBreak"
            />
          </div>
        </div>

        <div class="modal__actions">
          <button type="button" class="modal__button" @click="apply">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isTimerActive: Boolean,
  },
  data: () => ({
    sheet: false,
    sliderWork: 25,
    sliderShortBreak: 5,
    sliderLongBreak: 15,
    min: 1,
    max: 60,
  }),
  methods: {
    open() {
      this.sheet = true;
    },
    close() {
      this.sheet = false;
    },
    apply() {
      this.sheet = false;
      this.$emit('timerSettings', this.sliderWork, this.sliderShortBreak, this.sliderLongBreak);
    },
  },
};
</script>
