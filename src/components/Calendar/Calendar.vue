<template>
  <div class="calendar">
    <calendar-header :dateContext="dateContext"
    @subtractMonth="subtractMonth"
    @addMonth="addMonth">
    </calendar-header>
    <day-list :dateContext="dateContext" :today="today" @openModal="openModal"></day-list>
    <event-list :events="orderedEvents" :dateContext="dateContext" :today="today"
    @deleteEvent="deleteEvent" @openModal="openModal">
    </event-list>
    <modal v-if="showModal" @save="saveEvent" @close="closeModal" :event="clickedEvent">
      <p slot="date">{{clickedDate | toDate}}</p>
    </modal>
  </div>
</template>

<script>
import moment from 'moment'
import Modal from '../Modal'
import CalendarHeader from './CalendarHeader'
import DayList from './DayList'
import EventList from './EventList'
import {orderByDate, getMonthNumber, getYear, eventStorage} from '../../helpers'

export default {
  name: 'calendar',
  components: {
    Modal,
    DayList,
    EventList,
    CalendarHeader
  },
  data () {
    return {
      showModal: false,
      today: moment(),
      dateContext: moment(),
      clickedDate: '',
      clickedEvent: {subject: '', date: moment()},
      events: eventStorage.fetch()
    }
  },
  // watch events change for localStorage persistence
  watch: {
    events: {
      handler: function (events) {
        eventStorage.save(events)
      },
     deep: true
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
    openModal: function (date, event) {
      this.clickedDate = `${getYear(this.dateContext)}-${getMonthNumber(this.dateContext)}-${("0" + date).slice(-2)}`
      if(event) {
        this.clickedEvent = event
        this.clickedDate = event.date
      }
      this.showModal = true
    },
    closeModal: function(){
      this.showModal = false
      this.clickedEvent = {subject: '', date: moment()}
    },
    saveEvent: function (subject, time, event){
      if(event.id || event.id == '0'){
        // We find the index of the updated event and update it.
        let eventId = this.events.indexOf(this.events.find(x => x.id == event.id))
        this.$set(this.events, eventId , {id: event.id, subject: subject, date: moment(event.date).hours(time.split(':')[0]).minutes(time.split(':')[1])})
        this.clickedEvent = {subject: '', date: moment()}
      } else {
        // We add the event.
        this.events.push({id: this.events.length, date: this.clickedDate + ' ' + time, subject})
      }
      this.showModal = false;
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
</style>
