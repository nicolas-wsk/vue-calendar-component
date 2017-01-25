import moment from 'moment'

export function toDate (date) {
  let dateM = moment(date)
  return `${dateM.format('D')} ${dateM.format('MMMM')} ${dateM.format('YYYY')}`
}

export function toTime (date) {
  return `${moment(date).format('HH:mm')}`
}

export function toMonth (date) {
  return moment(date).format('MMMM')
}

export function toYear (date) {
  return moment(date).format('Y')
}