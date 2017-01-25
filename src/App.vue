<template>
  <div id="app">
    <page-header></page-header>
    <section class="section">
      <div class="container">
        <calendar></calendar>
      </div>
    </section>
  </div>
</template>

<script>
import Bulma from 'bulma'
import Calendar from './components/Calendar/Calendar'
import PageHeader from './components/PageHeader'

export default {
  name: 'app',
  components: {
    Calendar,
    PageHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">

</style>
