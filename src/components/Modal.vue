<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Event</p>
          <button class="delete" @click="$emit('close')"></button>
        </header>

        <section class="modal-card-body">
          <h4 class="subtitle"><slot name="date"></slot></h4>
          <label class="label">At </label>
          <p class="control">
          <input class="input" type="time" v-model="time"name="time">
          </p>
          <label class="label">Subject</label>
          <p class="control">
            <textarea ref='textarea' class="textarea" placeholder="e.g., Breakfast at Tiffany's" v-model="subject"></textarea>
          </p>
        </section>

        <footer class="modal-card-foot">
          <a class="button is-primary" @click="$emit('save', subject, time, event)">Save event</a>
          <a class="button" @click="$emit('close')">Cancel</a>
        </footer>
      </div>
  </div>
</template>

<script>
import {toTime} from '../filters'

  export default {
    name: 'modal',
    props: ['event'],
    data () {
      return {
        subject: this.event.subject,
        time: toTime(this.event.date)
      }
    }
  }
</script>

<style>

</style>