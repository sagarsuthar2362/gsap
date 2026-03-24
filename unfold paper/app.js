var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#paper",
    start: "top 30% ",
    scrub: 2,
    // markers: true,
  },
});

tl.from("#img2", {
  rotationX: -90,
  transformOrigin:"top center"
});
tl.from("#img3", {
  rotationX: -90,
  transformOrigin:"top center"
});
