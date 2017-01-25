<template>
  <div class="calendar">
    <div class="calendar-header">
      <span class="icon">
        <i class="fa fa-chevron-left" @click="subtractMonth"></i>
      </span>
      <h4 class="title is-4"> {{dateContext | toMonth}} {{dateContext | toYear}}</h4>
      <span class="icon">
        <i class="fa fa-chevron-right" @click="addMonth"></i>
      </span>
    </div>
    <ul class="weekdays">
      <li v-for="day in days" v-text="day"></li>
    </ul>
    <day-list :dateContext="dateContext" :today="today" @openModal="openModal"></day-list>
    <event-list :events="orderedEvents" :dateContext="dateContext" :today="today" @deleteEvent="deleteEvent">
    </event-list>
    <modal v-if="showModal" @save="saveEvent" @close="showModal = false">
      <p slot="date">{{clickedDate | toDate}}</p>
    </modal>
  </div>
</template>

<script>
import moment from 'moment'
import Modal from '../Modal'
import DayList from './DayList'
import EventList from './EventList'
import {orderByDate, getMonthNumber, getYear} from '../../helpers'

export default {
  name: 'calendar',
  components: {
    Modal,
    DayList,
    EventList
  },
  data () {
    return {
      showModal: false,
      today: moment(),
      dateContext: moment(),
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      clickedDate: '',
      events: [
        {id: 0, date: '2017-01-13 08:30', subject: 'Interview with Elon Musk at Space X.'},
        {id: 1, date: '2017-01-30 18:00', subject: 'Conference at Hooli with Gavin.'},
        {id: 2, date: '2017-02-09 11:00', subject: 'Dinner with Donald Trump.'}
      ]
    }
  },
  computed: {
    orderedEvents: function () {
      return orderByDate(this.events);
    }
  },
  methods: {
    addMonth: function () {
      this.dateContext = moment(this.dateContext).add(1, 'month')
    },
    subtractMonth: function () {
      this.dateContext = moment(this.dateContext).subtract(1, 'month')
    },
    openModal: function (date) {
      this.clickedDate = `${getYear(this.dateContext)}-${getMonthNumber(this.dateContext)}-${("0" + date).slice(-2)}`
      this.showModal = true
    },
    saveEvent: function (subject, time){
      this.showModal = false;
      this.events.push({id: this.events.length, date: this.clickedDate + ' ' + time, subject})
    },
    deleteEvent: function (event){
      let index = this.events.indexOf(event)
      this.events.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .calendar {
    max-width: 500px;
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
</style>
