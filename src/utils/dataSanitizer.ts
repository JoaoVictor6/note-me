export const dateSanitize = (timeStamp: string) => {
  const language = window.navigator.language || 'pt-BR';

  const date = new Date(timeStamp)
  const sanitized =  Intl.DateTimeFormat(language,{
    month: 'short',
    day: '2-digit',
    year: 'numeric'
  }).formatToParts(date)

  const month = monthSanitizer(sanitized[0].value)
  const day = sanitized[2].value
  const year = sanitized[4].value
  return `${month} ${day} ${year}`
}

const monthSanitizer = (month: string) => {
  if(month.match(/,/)){
    return month.replace('.', ',')
  }
  return `${month},`
}