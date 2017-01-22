<template>
  <div class="calendar">
    <div class="calendar-header">
      <span class="icon">
        <i class="fa fa-chevron-left" @click="subtractMonth"></i>
      </span>
      <h4 class="title is-4"> {{month}} {{year}}</h4>
      <span class="icon">
        <i class="fa fa-chevron-right" @click="addMonth"></i>
      </span>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-text="day"></li>
    </ul>
    <ul class="dates">
      <li v-for="blank in firstDayOfMonth">&nbsp;</li>
      <li v-for="date in daysInMonth"
      :class="{'current-day': date == initialDate && month == initialMonth && year == initialYear}"
      v-text="date">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'calendar',
  data () {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    }
  },
  computed: {
    year: function () {
      return this.dateContext.format('Y');
    },
    month: function () {
      return this.dateContext.format('MMMM');
    },
    daysInMonth: function () {
      return this.dateContext.daysInMonth();
    },
    currentDate: function () {
      return this.dateContext.get('date');
    },
    firstDayOfMonth: function () {
      let firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days');
      return firstDay.weekday();
    },
    initialDate: function () {
      return this.today.get('date');
    },
    initialMonth: function () {
      return this.today.format('MMMM');
    },
    initialYear: function () {
      return this.today.format('Y');
    }
  },
  methods: {
    addMonth: function () {
      this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    subtractMonth: function () {
      this.dateContext = moment(this.dateContext).subtract(1, 'month');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calendar {
    width: 600px;
    margin: 0 auto;
    color: #737173;
  }
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

  .dates {
    display: flex;
    flex-flow: row wrap;
    & > li {
      width: 14.2857%;
      height: 85px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
    }
    & > li:hover {
      background: #EFEFEF;
    }
    .current-day {
      background-color: #3E86CD;
      color: #fff;
      &:hover {
        background: #3E86CD;
      }
    }
  }
</style>
