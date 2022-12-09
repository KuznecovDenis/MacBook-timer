const itemTimes = document.querySelectorAll('.timer-item span')
const releaseDate = new Date(2023, 11, 10 ).getTime()

function getCountdownTime() {

  const now = new Date().getTime()

  const diferentTime = releaseDate - now

  const oneDay = 24*60*60*1000
  const oneHour = 24*60*1000
  const oneMinute = 60*1000

  let days = Math.floor(diferentTime / oneDay)
  let hours = Math.floor((diferentTime % oneDay) / oneHour)
  let minutes = Math.floor((diferentTime % oneHour) / oneMinute)
  let seconds = Math.floor((diferentTime % oneMinute) / 1000)

  const valuesTime = [days, hours, minutes, seconds]

  itemTimes.forEach((el, idx) => el.textContent = valuesTime[idx])

  if (diferentTime < 1) {
    clearInterval(timerId)
  }
}

const timerId = setInterval(getCountdownTime, 1000)
getCountdownTime()