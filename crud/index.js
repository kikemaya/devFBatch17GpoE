"use strict"

const { v4: uuidv4 } = require('uuid');

const d = document

// capturando los nodos de html con javascript
const input_todo = d.getElementById('input-todo')
const btn_add = d.getElementById('btn-add')
const content_w = d.getElementById('content-wrapper')

// url base para consumir api
const url = 'http://localhost:3000/data'

// funcion que imprime elementos li y button en el dom
const printTask = (task, id) => {
  let li = d.createElement('li')
  li.dataset.id = id
  li.textContent = task

  const btn_1 = d.createElement('button')
  const btn_2 = d.createElement('button')
  btn_1.textContent = 'Editar'
  btn_2.textContent = 'Eliminar'

  btn_1.addEventListener('click', () => {
    putData(id)
  })

  btn_2.addEventListener('click', () => {
    console.log('Eliminando...');
  })

  li.append(btn_1, btn_2)

  content_w.appendChild(li)
}

// funcion que obtiene datos de la api
const getData = () => {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      data.forEach(element => {
        printTask(element.task, element.id)
      });
    })
    .catch(error => console.error(error))
}
// funcion que envia datos a la api
const postData = (task) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'id': uuidv4(),
      'task': task
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}
// crear la logica como te imagines que tiene que ser para editar una tarea
const putData = (id) => {
  return fetch(url + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'task': 'Hola, soy una tarea nueva'
    })
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

getData()

btn_add.addEventListener('click', () => {
  return postData(input_todo.value)
})

// actualizar el dato que se escriba en el input de texto
