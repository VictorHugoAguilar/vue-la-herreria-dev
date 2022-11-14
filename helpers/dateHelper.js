export const dateFormat = (date) => {
  const d = new Date(date)
  const hour = d.getHours()
  const minute = d.getMinutes()
  let day = '' + d.getDate()
  let month = '' + (d.getMonth() + 1)
  const year = d.getFullYear()

  if (month.length < 2) {
    month = '0' + month
  }

  if (day.length < 2) {
    day = '0' + day
  }

  return minute + ':' + hour + ' ' + [day, month, year].join('-')
}

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ]
const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export const getDayMonthYear = (dateString) => {
  const date = new Date(dateString)
  return { 
    day: date.getDate(),
    dayWeek: days[date.getDay()],
    month: months[date.getMonth()], 
    year: date.getFullYear()
  }
}

export const getHourDateFormated = (date) => {
  const d = new Date(date)
  const hours = d.getHours().length < 2 ? '0' + d.getHours() : d.getHours()
  const minutes = d.getMinutes().length < 2 ? '0' + d.getMinutes() : d.getMinutes()
  const formatedHour = hours + ':' + minutes

  const month = months[d.getMonth()].toLowerCase().slice(0, 3) + '.'

  return `${d.getDate()} ${month} de ${d.getFullYear()} a las ${formatedHour}`
}
