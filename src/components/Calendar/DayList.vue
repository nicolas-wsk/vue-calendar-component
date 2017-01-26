<template>
  <ul class="dates">
    <li v-for="blank in firstDayOfMonth">&nbsp;</li>
    <day v-for="date in daysInMonth"
    :date="date" :dateContext="dateContext" :today="today"
    @openModal="$emit('openModal', date)">
    </day>
  </ul>
</template>

<script>
import Day from './Day'
import {getDaysInMonth, getFirstDaysInMonth} from '../../helpers'

export default {
  name: 'day-list',
  props: ['dateContext', 'today'],
  components: {
    Day
  },
  computed: {
    daysInMonth: function () {
      return getDaysInMonth(this.dateContext)
    },
    firstDayOfMonth: function () {
      return getFirstDaysInMonth(this.dateContext)
    }
  }
}
</script>

<style scoped lang="scss">
  .dates {
    display: flex;
    flex-flow: row wrap;
    margin: 5px 0;
    & > li {
      width: 14.2857%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
    }
    li:before{
        content: "";
        display: block;
        padding-top: 100%;  /* initial ratio of 1:1*/
    }
    & > li:hover {
      background: #EFEFEF;
    }
  }
</style>
