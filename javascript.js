console.log("Hello World!");

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')
console.log(form, submitButton)
form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  console.log ('poop')
  window.location.href = 'success.html'
})