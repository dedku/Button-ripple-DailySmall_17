import './style.css'
const buttons = document.querySelectorAll('.ripple') as NodeListOf<HTMLElement>

buttons.forEach(button => {
  button.addEventListener('click', function (e) {
    const x: number = e.pageX
    const y: number = e.pageY

    const buttonTop = button.offsetTop
    const buttonLeft = button.offsetLeft

    const xInside: number = x - buttonLeft
    const yInside: number = y - buttonTop

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    this.appendChild(circle)

    setTimeout(() => circle.remove(), 500)
  })
})