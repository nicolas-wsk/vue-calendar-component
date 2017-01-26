<template>
  <div class="events">
    <event v-for="event in events" :event="event" :dateContext="dateContext" :today="today"
    @deleteEvent="$emit('deleteEvent',event)"
    @openModal="$emit('openModal',event.date, event)">
    </event>
  </div>
</template>

<script>
import Event from './Event'
export default {
  name: 'event-list',
  props: ['events', 'today', 'dateContext'],
  components: {
    Event
  }
}
</script>
