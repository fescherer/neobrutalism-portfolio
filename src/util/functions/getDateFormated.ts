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

export function getDateFormated(date: string) {
  const dateobj = new Date(date)

  return `${months[dateobj.getMonth()]}, ${dateobj.getFullYear()}`
}
