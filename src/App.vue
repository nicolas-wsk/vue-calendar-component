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
import Calendar from './components/Calendar'
import PageHeader from './components/PageHeader'
import Bulma from 'bulma'

export default {
  name: 'app',
  components: {
    Calendar,
    PageHeader
  }
}
</script>

<style lang="scss">
</style>
