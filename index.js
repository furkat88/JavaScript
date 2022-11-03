const modal_one = document.querySelector('.modal_one')
const modal_two = document.querySelector('.modal_two')
const plus_one = document.querySelector('.plus_one')
const plus_two = document.querySelector('.plus_two')
const cover = document.querySelectorAll('.cover')
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

  if (percent === 0) prev.classList.add('displayNone')
  next.onclick = () => { 
    if(percent === -200) return 
    percent -= 100
    cover.forEach(el => {
      el.style.left = `${percent}%`
    })
    if (percent !== 0) prev.classList.remove('displayNone')
    if (percent == -200) next.classList.add('displayNone')
  }
  
  prev.onclick = () => { 
    if(percent === 0) return 
    percent += 100
    cover.forEach(el => {
      el.style.left = percent + '%'
    })
    if (percent === 0) prev.classList.add('displayNone')
    if (percent !== -200) next.classList.remove('displayNone')
  }


const blue = document.querySelector('#blue')
const midnight = document.querySelector('#midnight')
const pink = document.querySelector('#pink')
const starlight = document.querySelector('#starlight')
const red = document.querySelector('#red')
const h4color = document.querySelector('.h4color')

const arrColors = [blue, midnight, pink, starlight, red]

function blabla(arr) {

  let col = h4color.innerHTML

  arr.forEach(el => {
      el.onclick = () => {

        arr.forEach((x) => {
          x === el ? x.style.border = `2px solid ${
            x === blue ? '#0b4268' : x === midnight ? '#42474d' : 
            x === pink ? '#fbe2dd' : x === starlight ? '#fbf7f4' : 'red'
          }` : x.style.border = ''
        })


        cover.forEach((y,i)=> {
          if (el === blue && i !== 0) {
            y.classList.add('displayNone')
            cover[0].classList.remove('displayNone')
            col = 'Color: Blue'
          }
          if (el === midnight && i !== 1) {
            y.classList.add('displayNone')
            cover[1].classList.remove('displayNone')
            col = 'Color: Midnight'
          }
          if (el === pink && i !== 2) {
            y.classList.add('displayNone')
            cover[2].classList.remove('displayNone')
            col = 'Color: Pink'
          }
          if (el === starlight && i !== 4) {
            y.classList.add('displayNone')
            cover[4].classList.remove('displayNone')
            col = 'Color: Starlight'
          }
          if (el === red && i !== 3) {
            y.classList.add('displayNone')
            cover[3].classList.remove('displayNone')
            console.log(cover[3]);
            col = 'Color: Red'
          }
        })
      }

      
      el.onmouseenter = () => {
          if(el === blue) {
            h4color.innerHTML = 'Color: Blue'
          }
          if(el === midnight) {
            h4color.innerHTML = 'Color: Midnight'
          }
          if(el === pink) {
            h4color.innerHTML = 'Color: Pink'
          }
          if(el === starlight) {
            h4color.innerHTML = 'Color: Starlight'
          }
          if(el === red) {
            h4color.innerHTML = 'Color: Red'
          }
      }

      el.onmouseleave = () => {
        h4color.innerHTML = col
    }
  })
}

blabla(arrColors)

console.log(cover);


