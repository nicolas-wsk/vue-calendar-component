<template>
  <div id="app">
    <page-header></page-header>
    <section class="section">
      <div class="container">
        <calendar @open="showModal = true"></calendar>
      </div>
    </section>
    <modal v-if="showModal" @close="showModal = false">
  </div>
</template>

<script>
import Bulma from 'bulma'
import Calendar from './components/Calendar'
import PageHeader from './components/PageHeader'
import Modal from './components/Modal';


export default {
  name: 'app',
  components: {
    Calendar,
    PageHeader,
    Modal
  },
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss">

</style>
