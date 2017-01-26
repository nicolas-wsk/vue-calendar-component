<template>
  <div>
    <div class="calendar-header">
      <span class="icon">
        <i class="fa fa-chevron-left" @click="$emit('subtractMonth')"></i>
      </span>
      <h4 class="title is-4"> {{dateContext | toMonth}} {{dateContext | toYear}}</h4>
      <span class="icon">
        <i class="fa fa-chevron-right" @click="$emit('addMonth')"></i>
      </span>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-text="day"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'calendar-header',
  props: ['dateContext'],
  data () {
    return {
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calendar-header, .weekdays {
    display: flex;
    & > * {
      flex: 1;
      text-align: center;
    }
  }

  .fa {
    cursor: pointer;
  }

  .weekdays {
    padding: 5px 0;
    border-bottom: 1px solid #EFEFEF;
    li {
      color: #BCBABC;
      font-weight: 300;
    }
  }
</style>
