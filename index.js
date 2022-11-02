const modal_one = document.querySelector('.modal_one')
const modal_two = document.querySelector('.modal_two')
const plus_one = document.querySelector('.plus_one')
const plus_two = document.querySelector('.plus_two')
const cover = document.querySelector('.cover')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

modal_one.onmouseenter = () => {
  plus_one.style.background = 'black'
  plus_one.style.color = 'white'
}

modal_one.onmouseleave = () => {
  plus_one.style.background = 'white'
  plus_one.style.color = 'black'
}

modal_two.onmouseenter = () => {
  plus_two.style.background = 'black'
  plus_two.style.color = 'white'
}

modal_two.onmouseleave = () => {
  plus_two.style.background = 'white'
  plus_two.style.color = 'black'
}

let percent = 0
let imgs = [...cover.children]
prev.classList.add('displayNone')

function dodo(percent) {
  imgs.forEach(el => el.style.left = `${percent}%`)
  if (percent === -200) {
    next.classList.add('displayNone')
  } else {
    next.classList.remove('displayNone')
  }

  if (percent >= 0) {
    prev.classList.add('displayNone')
  } else {
    prev.classList.remove('displayNone')
  }
}

next.onclick = () => { 
  if(percent < -100) return 
  percent -= 100
  dodo(percent)
}

prev.onclick = () => { 
  if(percent === 0) return 
  percent += 100
  dodo(percent)
}

const blue = document.querySelector('#blue')
const midnight = document.querySelector('#midnight')
const pink = document.querySelector('#pink')
const starlight = document.querySelector('#starlight')
const red = document.querySelector('#red')

const arrColors = [blue, midnight, pink, starlight, red]

function blabla(arr) {
  arr.forEach(el => {
      el.onclick = () => {
        arr.forEach((x,i) => {
          x === el ? x.style.border = `2px solid ${
            x === blue ? '#0b4268' : x === midnight ? '#42474d' : 
            x === pink ? '#fbe2dd' : x === starlight ? '#fbf7f4' : 'red'
          }` : x.style.border = ''
        })
      }
  })
}

blabla(arrColors)