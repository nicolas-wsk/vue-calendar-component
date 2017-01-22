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
      @click="addEvent(date)"
      v-text="date">
      </li>
    </ul>
    <div class="events">
        <article class="message is-info" v-for="event in orderedEvents" v-show="getMonthOfDate(event.date) == monthNumber">
          <div class="message-header">
            <p>{{dateBeautify(event.date)}} at {{timeEvent(event.date)}}</p>
            <button class="delete" @click="deleteEvent(event)"></button>
          </div>
          <div class="message-body">
           {{event.subject}}
          </div>
        </article>
    </ul>
    <modal v-if="showModal" @save="saveEvent" @close="showModal = false"><p slot="date">{{dateBeautify(clickedDateISO)}}</p></modal>
  </div>
</template>

<script>
import moment from 'moment'
import Modal from './Modal';

export default {
  name: 'calendar',
  components: {
    Modal
  },
  data () {
    return {
      showModal: false,
      today: moment(),
      dateContext: moment(),
      days: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      clickedDateISO: '',
      events: [
        {id: 0, date: '2017-01-13 08:30', subject: 'Interview with Elon Musk at Space X.'},
        {id: 1, date: '2017-01-30 18:00', subject: 'Conference at Hooli with Gavin.'},
        {id: 2, date: '2017-02-09 11:00', subject: 'Dinner with Donald Trump.'}
      ]
    }
  },
  computed: {
    year: function () {
      return this.dateContext.format('Y');
    },
    month: function () {
      return this.dateContext.format('MMMM');
    },
    monthNumber: function () {
      return this.dateContext.format('MM');
    },
    daysInMonth: function () {
      return this.dateContext.daysInMonth('');
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
    },
    orderedEvents: function(){
      return this.events.sort(function(a,b){return new Date(a.date).getTime() - new Date(b.date).getTime()});
    }
  },
  methods: {
    addMonth: function () {
      this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    subtractMonth: function () {
      this.dateContext = moment(this.dateContext).subtract(1, 'month');
    },
    addEvent: function (date) {
      this.clickedDateISO = `${this.year}-${this.monthNumber}-${("0" + date).slice(-2)}`;
      this.showModal = true
    },
    saveEvent: function (subject, time){
      this.showModal = false;
      this.events.push({id: this.events.length, date: this.clickedDateISO + ' ' + time, subject})
    },
    deleteEvent: function (event){
      let index = this.events.indexOf(event)
      this.events.splice(index, 1)
    },
    dateBeautify: function (date) {
      let dateM = moment(date)
      return `${dateM.format('D')} ${dateM.format('MMMM')} ${dateM.format('YYYY')}`
    },
    timeEvent: function (date) {
      let dateM = moment(date)
      return `${dateM.format('HH:mm')}`
    },
    getMonthOfDate: function(date){
      let dateM = moment(date)
      return `${dateM.format('MM')}`
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

  .dates {
    display: flex;
    flex-flow: row wrap;
    margin: 5px 0;

    & > li {
      width: 14.2857%;
      // height: 85px;
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
