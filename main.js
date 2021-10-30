import './style.css'

const tl = gsap.timeline({ default: { duration: 0.6 } });

window.addEventListener('load', () => {
  tl.from('.home-text-ctn h1 span', {
    y: "100%",
    opacity: 0,
    stagger: 0.25
  })
  tl.from('.home-text-ctn p', {
    opacity: 0
  })
})