document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form = document.querySelector('#create-task-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  buildToDo(e.target.newtaskdescription.value)
  form.reset()
 })
});

function buildToDo(toDo) {
let btn = document.createElement('button')
let p = document.createElement('p')
btn.addEventListener('click', handleDelete)
btn.textContent = 'x'
p.textContent = toDo
p.appendChild(btn)
document.querySelector('#tasks').appendChild(p)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}
