<template>
  <article v-show="eventMonth == dateMonth" class="message is-info"
  :class="{'is-warning': new Date(event.date).getTime() < new Date(today).getTime()}"
  >
    <div class="message-header">
      <p>{{event.date | toDate }} at {{ event.date | toTime }}</p>
      <button class="delete" @click="$emit('deleteEvent',event)"></button>
    </div>
    <div class="message-body">
     {{event.subject}}
    </div>
  </article>
</template>

<script>
import {getMonth} from '../../helpers'

export default {
  name: 'event',
  props: ['event', 'dateContext', 'today'],
  computed: {
    dateMonth: function () {
      return getMonth(this.dateContext)
    },
    eventMonth: function () {
      return getMonth(this.event.date)
    }
  }
}
</script>
