<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add a new event</p>
          <button class="delete" @click="$emit('close')"></button>
        </header>

        <section class="modal-card-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa provident sint veniam iusto accusamus natus, dignissimos quam sequi in ut, magnam porro nobis tempora libero reiciendis. Eveniet unde quibusdam tempore.
        </section>

        <footer class="modal-card-foot">
          <a class="button is-primary">Save event</a>
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
      }
    }
  }
</script>

<style>

</style>