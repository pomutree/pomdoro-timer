<template>
  <v-card-text>
    <div class="d-flex justify-space-between">
      <h3>Work</h3>
      <span class="body-2">{{ sliderWork }}</span>
    </div>
    <v-slider
      :value="sliderWork"
      @input="$emit('update:sliderWork', $event)"
      dense
      color="gray"
      track-color="gray"
      thumb-color="error"
      class="align-center"
      :max="max"
      :min="min"
    />
    <div class="d-flex justify-space-between">
      <h3>Short break</h3>
      <span class="body-2">{{ sliderShortBreak }}</span>
    </div>
    <v-slider
      :value="sliderShortBreak"
      @input="$emit('update:sliderShortBreak', $event)"
      dense
      color="gray"
      track-color="gray"
      thumb-color="error"
      class="align-center"
      :max="max"
      :min="min"
    />
    <div class="d-flex justify-space-between">
      <h3>Long break</h3>
      <span class="body-2">{{ sliderLongBreak }}</span>
    </div>
    <v-slider
      :value="sliderLongBreak"
      @input="$emit('update:sliderLongBreak', $event)"
      dense
      color="gray"
      track-color="gray"
      thumb-color="error"
      class="align-center"
      :max="max"
      :min="min"
    />
</v-card-text>
</template>

<script>
export default {
  props: {
    sliderWork: { type: Number, default: 25 },
    sliderShortBreak: { type: Number, default: 5 },
    sliderLongBreak: { type: Number, default: 15 },
  },
  data () {
    return {
      min: 1, 
      max: 60
    }
  }
}
</script>