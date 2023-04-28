const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dec'
]

const fullMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export function getDateFormated(date: string, isFullMonth?: boolean) {
  if (date === 'present_day') return 'Data atual'
  const dateobj = new Date(date)
  const m = isFullMonth ? fullMonth : months
  return `${m[dateobj.getMonth()]}, ${dateobj.getFullYear()}`
}

export function getDateFormatedWithDay(date: string, isFullMonth?: boolean) {
  if (date === 'present_day') return 'Data atual'
  const dateobj = new Date(date)
  const m = isFullMonth ? fullMonth : months
  return `${
    m[dateobj.getMonth()]
  }, ${dateobj.getDate()}, ${dateobj.getFullYear()}`
}
