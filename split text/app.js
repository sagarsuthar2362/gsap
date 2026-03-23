gsap.registerPlugin(SplitText);

SplitText.create(".text", {
  type: "words,chars",
  mask: "chars",
  // charsClass: "chars",  // to add classes linesClass, wordsClass, charsClass
  onSplit: (self) => {
    gsap.from(self.chars, {
      opacity: 0,
      y: 100,
      stagger: 0.05,
    });
  },
});
