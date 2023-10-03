const tl = gsap.timeline({ default: { duration: 0.6 } });

window.addEventListener('load', () => {
  tl.from('.home-text-ctn h1 span', {
    y: '100%',
    opacity: 0,
    stagger: 0.25
  });
  tl.from('.home-text-ctn p', {
    opacity: 0
  });
});

const themeChanger = document.getElementById("change-theme");
const body = document.getElementsByTagName("body")[0];

function changeTheme() {
  if(body.getAttribute("data-theme") == "dark"){
      body.setAttribute("data-theme", "light");
  } else {
      body.setAttribute("data-theme", "dark");
  }
}