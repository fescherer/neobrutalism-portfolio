const months = [
  'Jan',
  'Fev',
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
  const dateobj = new Date(date)
  const m = isFullMonth ? fullMonth : months
  return `${m[dateobj.getMonth()]}, ${dateobj.getFullYear()}`
}
