<template>
  <div>
    <button type="button" class="icon-button icon-button--small" @click="open" title="Session information">
      <span class="mdi mdi-information-outline icon-button__icon" aria-hidden="true"></span>
      <span class="sr-only">Session information</span>
    </button>

    <div v-if="dialog" class="modal-backdrop" @click.self="close">
      <div class="modal" role="dialog" aria-modal="true" aria-labelledby="information-title">
        <h2 class="modal__title" id="information-title">Session summary</h2>
        <table class="modal__table">
          <tbody>
            <tr>
              <th scope="row">Total pomodoro</th>
              <td>{{ pomodoro }}</td>
            </tr>
            <tr>
              <th scope="row">Start time</th>
              <td>{{ start }}</td>
            </tr>
          </tbody>
        </table>
        <div class="modal__actions">
          <button type="button" class="modal__button" @click="close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      start: '-',
      pomodoro: 0,
    };
  },
  methods: {
    open() {
      this.dialog = true;
      this.start = localStorage.start || '-';
      this.pomodoro = Number(localStorage.pomodoro || 0);
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
