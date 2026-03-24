var tl = gsap.timeline();

tl.to("#page1", {
  y: "-100%",
  duration: 0.8,
  delay:0.8
});

const load = document.querySelector(".load");
let num = 0;

setInterval(() => {
  if (num == 101) return;
  load.innerText = num + "%";
  num++;
}, 10);
