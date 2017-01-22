<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Create a new event</p>
          <button class="delete" @click="$emit('close')"></button>
        </header>

        <section class="modal-card-body">
        <h4 class="subtitle"><slot name="date"></slot></h4>
          <label class="label">Subject</label>
          <p class="control">
            <textarea class="textarea" placeholder="e.g., Breakfast at Tiffany's" v-model="subject"></textarea>
          </p>
        </section>

        <footer class="modal-card-foot">
          <a class="button is-primary" @click="$emit('save', subject)">Save event</a>
          <a class="button" @click="$emit('close')">Cancel</a>
        </footer>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'modal',
    data () {
      return {
        subject: ''
      }
    }
  }
</script>

<style>

</style>