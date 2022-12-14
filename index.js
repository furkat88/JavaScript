const data = [
  { 
    id: 1,
    title: 'do this 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'New'
  },
  { 
    id: 2,
    title: 'do this 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'Not Done'
  },
  { 
    id: 3,
    title: 'do this 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'New'
  },
  { 
    id: 4,
    title: 'do this 4',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'Not done'
  },
  { 
    id: 5,
    title: 'do this 5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'Pending'
  },
  { 
    id: 6,
    title: 'do this 6',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus officia quo repudiandae a modi, corrupti facere cupiditate, earum accusantium consectetur quia magnam distinctio iusto quae ea repellat recusandae magni provident',
    date: new Date(),
    status: 'Pending'
  }
]

const tableRowHeader = document.createElement('tr')
const tableTitleHeader = document.createElement('th')
const tableDescriptionHeader = document.createElement('th')
const tableDateHeader = document.createElement('th')
const tableTimeHeader = document.createElement('th')
const tableStatusHeader = document.createElement('th')
const tableEditHeader = document.createElement('th')

tableTitleHeader.innerText = 'Title'
tableDescriptionHeader.innerText = 'Description'
tableDateHeader.innerText = 'Date'
tableTimeHeader.innerText = 'Time'
tableStatusHeader.innerText = 'Status'
tableEditHeader.innerText = 'Edit'

tableRowHeader.append(tableTitleHeader, tableDescriptionHeader, tableDateHeader, tableTimeHeader, tableStatusHeader, tableEditHeader)


const add_task_btn = document.querySelector('.add_task_btn')
const modal_close_btn = document.querySelector('.modal_close_btn')
const modal_container = document.querySelector('.modal_container')
const tasks_container = document.querySelector('.tasks_container')
const table_container = document.querySelector('.table_container')
const cards_container = document.querySelector('.cards_container')
const cards_wrapper = document.querySelector('.cards_wrapper')
const table = document.querySelector('table')
const table_btn = document.querySelector('.table_btn')
const cards_btn = document.querySelector('.cards_btn')

table.append(tableRowHeader)

function date(time) {
  let day = time.getDate()
  let month = time.getMonth()
  let year = time.getFullYear()
  return `${day}.${month+1}.${year}`
}

function time(time) {
  let hours = time.getHours()
  let minutes = time.getMinutes()
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`
}

function createTable(data) {
  const tr = document.createElement('tr')
  const td_title = document.createElement('td')
  const td_description = document.createElement('td')
  const td_date = document.createElement('td')
  const td_time = document.createElement('td')
  const td_status = document.createElement('td')
  const editBtn = document.createElement('button')

  editBtn.classList.add('editBtn')
  editBtn.innerText = 'Edit'
  td_title.innerText = data.title
  td_description.innerText = data.description
  td_date.innerText = date(data.date)
  td_time.innerText = time(data.date)
  td_status.innerText = data.status === 'Pending' ? 'Pending' : data.status === 'New' ? 'New' : 'Not done'
  td_status.style.color = data.status === 'Pending' ? 'green' : data.status === 'New' ? 'black' : 'red'

  tr.append(td_title, td_description, td_date, td_time, td_status,editBtn)
  table.appendChild(tr)
}

function createCard(data) {
  const cardContainer = document.createElement('div')
  const cardTitle = document.createElement('h3')
  const cardDescription = document.createElement('p')
  const cardDate = document.createElement('span')
  const cardTime = document.createElement('span')
  const cardStatus = document.createElement('p')

  cardContainer.classList.add('card')

  cardTitle.innerText = data.title
  cardDescription.innerText = data.description
  cardDate.innerText = date(data.date)
  cardTime.innerText = time(data.date)
  cardStatus.innerText = data.status === 'Pending' ? 'Pending' : data.status === 'New' ? 'New' : 'Not done'
  cardStatus.style.color = data.status === 'Pending' ? 'green' : data.status === 'New' ? 'black' : 'red'

  cardContainer.append(cardTitle, cardDescription, cardDate, cardTime, cardStatus)
  cards_wrapper.appendChild(cardContainer)
}

data.forEach(el => {
  createTable(el)
})

data.forEach(el => {
  createCard(el)
})

table_btn.onclick = () => {
  cards_container.classList.remove('show')
  cards_container.classList.add('hide')
  table_container.classList.remove('hide')
  table_container.classList.add('show')
}

cards_btn.onclick = () => {
  table_container.classList.remove('show')
  table_container.classList.add('hide')
  cards_container.classList.remove('hide')
  cards_container.classList.add('show')
}

add_task_btn.onclick = () => {
  modal_container.classList.add('show')
}

modal_close_btn.onclick = () => {
  modal_container.classList.remove('show')
}

const form_btn = document.querySelector('.form_btn')
const inputTitle = document.querySelector('#title')
const inputDescription = document.querySelector('#description')
const inpuTime= document.querySelector('#time')
const inputStatus = document.querySelector('#status')
const added_warn = document.querySelector('.added_warn')


form_btn.onclick = (e) => {
  e.preventDefault()
  let newTask = {}
  newTask.id = Math.random()
  newTask.title = inputTitle.value
  newTask.description = description.value
  newTask.date = new Date(inpuTime.value)
  newTask.status = inputStatus.value

  if(!newTask.title.length && !newTask.description.length) return
  
  if(newTask.title.length && newTask.description.length && inpuTime.value) {
    data.push(newTask)  
    createTable(newTask)  
    createCard(newTask)
    inputTitle.value = ''
    description.value = ''
    inpuTime.value = ''
    added_warn.style.opacity = '1'
    setTimeout(() => added_warn.style.opacity = '0', 2000)
  }
}

const task_search_input = document.querySelector('.task_search_input')

task_search_input.onkeyup = () => {
  let filtered = data.filter(el => el.title.includes(task_search_input.value))
  cards_wrapper.innerHTML = ''
  filtered.forEach(el => {
    createCard(el)
  })
  table.innerHTML = ''
  table.append(tableRowHeader)
  filtered.forEach(el => {
    createTable(el)
  })
}