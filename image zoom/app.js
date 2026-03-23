gsap.to("#page2 img", {
  width: "110%",
  height: "110%",
  borderRadius: 0,
  scrollTrigger: {
    trigger: "#page2",
    markers: true,
    start: "top 50%",
    end: "+=100%",
    scrub: 2,
    // pin:true
  },
});
