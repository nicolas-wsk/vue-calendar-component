<template>
  <ul class="dates">
    <li v-for="blank in firstDayOfMonth">&nbsp;</li>
    <li v-for="date in daysInMonth"
    :class="{'current-day': date == todayDay && simpleDate == todayDate}"
    @click="$emit('openModal', date)"
    v-text="date">
    </li>
  </ul>
</template>

<script>
import {getDaysInMonth, getFirstDaysInMonth, toDate, getDay} from '../../helpers'

export default {
  name: 'day-list',
  props: ['dateContext', 'today'],
  computed: {
    daysInMonth: function () {
      return getDaysInMonth(this.dateContext)
    },
    firstDayOfMonth: function () {
      return getFirstDaysInMonth(this.dateContext)
    },
    simpleDate: function () {
      return toDate(this.dateContext)
    },
    todayDay: function () {
      return getDay(this.today)
    },
    todayDate: function() {
      return toDate(this.today)
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

    .current-day {
      background-color: #3E86CD;
      color: #fff;
      &:hover {
        background: #3273dc;
      }
    }
  }
</style>
