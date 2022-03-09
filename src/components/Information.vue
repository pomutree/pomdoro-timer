<template>
  <v-col cols=4>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <th class="text-left">Total pomodoro</th>
                <td>{{ pomodoro }}</td>
              </tr>
              <tr>
                <th class="text-left">Start time</th>
                <td>{{ start }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-dialog>
    <div style="height: 0.5rem;"></div>
    <v-btn text fab outlined dark class="btn-sm" @click="toggleDialog">
      <v-icon class="white--text">mdi-information-outline</v-icon>
    </v-btn>
  </v-col>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      start: null,
      pomodoro: 0,
    }
  },
  methods: {
    toggleDialog () {
      this.dialog = true
      this.start = localStorage.start
      this.pomodoro = localStorage.pomodoro
    },
  },
};
</script>
