// gsap.to("#page2 img", {
//   width: "100%",
//   scrollTrigger: {
//     trigger: "#page2",
//     markers: true,
//     start: "top 0%",
//     end:"+=100%",
//     scrub: 2,
//     pin: true,
//   },
// });

gsap.to("#page3 h1", {
  transform: "translateX(-80%)",
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "+=100%",
    scrub: 2,
    pin: true,
  },
});
