const num = document.querySelector('h1')
const increment = document.querySelector('.increment')
const reset = document.querySelector('.reset')
const decrement = document.querySelector('.decrement')
const random = document.querySelector('.random')

let number = 0

increment.onclick = () => {
  if (number === 10) return
  number++
  num.innerText = number
}

decrement.onclick = () => {
  if (number === -10) return
  number--
  num.innerText = number
}

reset.onclick = () => {
  number = 0
  num.innerText = number
}

random.onclick = () => {
  let randomPositiveNumber = Math.round(Math.random() * 10)
  let randomNegativeNumber = Math.round(Math.random() * -10)
  let pickNumber = Math.random() < 0.5 ? randomNegativeNumber : randomPositiveNumber
  number = pickNumber
  num.innerText = number
}