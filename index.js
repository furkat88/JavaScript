const aircon = document.querySelector('.aircon')
const airconCheckbox = document.querySelector('#aircon')
const aircon_r = document.querySelector('.aircon_r')

aircon.onclick = () => {
  if (airconCheckbox.checked) {
    aircon_r.style.left = '12px'
    aircon.style.backgroundColor = 'rgb(129, 243, 173)'
  } else {
    aircon_r.style.left = '1px'
    aircon.style.backgroundColor = 'rgb(206, 206, 206)'
  }
}

const long_range = document.querySelector('.long_range')
const long_rangeCheckbox = document.querySelector('#long_range')
const long_range_r = document.querySelector('.long_range_r')

long_range.onclick = () => {
  if (long_rangeCheckbox.checked) {
    long_range_r.style.left = '12px'
    long_range.style.backgroundColor = 'rgb(129, 243, 173)'
  } else {
    long_range_r.style.left = '1px'
    long_range.style.backgroundColor = 'rgb(206, 206, 206)'
  }
}


const view = document.querySelector('.view')
const viewCheckbox = document.querySelector('#view')
const view_r = document.querySelector('.view_r')

view.onclick = () => {
  if (viewCheckbox.checked) {
    view_r.style.left = '12px'
    view.style.backgroundColor = 'rgb(129, 243, 173)'
  } else {
    view_r.style.left = '1px'
    view.style.backgroundColor = 'rgb(206, 206, 206)'
  }
}

const view2 = document.querySelector('.view2')
const viewCheckbox2 = document.querySelector('#view2')
const view_r2 = document.querySelector('.view_r2')
console.log(viewCheckbox2);
view2.onclick = () => {
  if (viewCheckbox2.checked) {
    view_r2.style.left = '12px'
    view2.style.backgroundColor = 'rgb(129, 243, 173)'
  } else {
    view_r2.style.left = '1px'
    view2.style.backgroundColor = 'rgb(206, 206, 206)'
  }
}

const image = document.querySelector('.image')
const stats = document.querySelector('.stats')


