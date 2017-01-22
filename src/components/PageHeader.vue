<template>
  <section class="hero is-primary is-medium">
    <!-- Hero header: will stick at the top -->
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <a class="nav-item">
              <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Logo"> -->
            </a>
          </div>
          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div class="nav-right nav-menu">
            <a class="nav-item is-active">
              Home
            </a>
           <!--  <a class="nav-item">
              Examples
            </a> -->
            <a class="nav-item">
              Documentation
            </a>
            <span class="nav-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fa fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Calendar Component
        </h1>
        <h2 class="subtitle">
          Made with Vue.js
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'page-header',
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
