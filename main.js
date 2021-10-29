import './style.css'

const tl = gsap.timeline();

window.addEventListener('load', () => {
  tl.from('.home-text-ctn h1 span', {
    y: "100",
    duration: 1
  })
  tl.from('.home-text-ctn p', {
    y: "20px",
    opacity: 0
  })
})