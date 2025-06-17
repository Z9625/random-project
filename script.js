const text = document.querySelector('.text')
const push = document.querySelector('.push')
const box = document.querySelector('.box')
const random = document.querySelector('.random')
let = h1 = document.querySelector('.h1')

push.addEventListener('click', () => {
    const list = document.createElement('h2')
    list.textContent = text.value
    box.appendChild(list)
    text.value = ''
    h1.innerHTML = ''
})
random.addEventListener('click', () => {
    let nams = document.querySelectorAll('h2')
    let num = Math.floor(Math.random() * nams.length) + 1;
    h1.innerHTML = nams[num].textContent
    box.innerHTML = ''
})