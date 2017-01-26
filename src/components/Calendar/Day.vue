<template>
    <li
    :class="{'current-day': date == todayDay && simpleDate == todayDate}"
    @click="$emit('openModal', date)"
    v-text="date">
    </li>
</template>

<script>
import {toDate, getDay} from '../../helpers'

export default {
  name: 'day',
  props: ['dateContext', 'today', 'date'],
  computed: {
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
  .current-day {
    background-color: #3E86CD;
    color: #fff;
    &:hover {
      background: #3273dc;
    }
  }
</style>
