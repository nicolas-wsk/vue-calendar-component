import moment from 'moment'

export function getDate (date) {
  return moment(date).get('date')
}

export function getDay (date) {
  return moment(date).get('D')
}

export function getMonth (date) {
  return moment(date).format('MMMM')
}

export function getMonthNumber (date) {
  return moment(date).format('MM')
}

export function getYear (date) {
  return moment(date).format('Y')
}

export function getDaysInMonth (date) {
  return moment(date).daysInMonth('')
}

export function getFirstDaysInMonth (date) {
  return moment(date).subtract((date.get('date') - 1), 'days').weekday()
}

export function toDate (date) {
  let dateM = moment(date)
  return `${dateM.format('D')} ${dateM.format('MMMM')} ${dateM.format('YYYY')}`
}

export function orderByDate(array){
  return array.sort(function(a,b){
    return new Date(a.date).getTime() - new Date(b.date).getTime()})
}

// localStorage persistence
var STORAGE_KEY = 'events-vuejs'
export const eventStorage = {
  fetch: function () {
    var events = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    events.forEach(function (event, index) {
      event.id = index
    })
    eventStorage.uid = events.length
    return events
  },
  save: function (events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }
}