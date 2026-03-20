var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  duration: 0.3,
  stagger: 0.3,
});

tl.from("#hero h1", {
  x: -500,
  duration: 0.5,
  opacity: 0,
  stagger: 0.5,
});

tl.from("img", {
  x: 200,
  opacity: 0,
  stagger: 0.5,
  duration: 0.3,
});
