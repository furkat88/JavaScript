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

function dodo(percent) {
  imgs.forEach(el => el.style.left = `${percent}%`)
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
