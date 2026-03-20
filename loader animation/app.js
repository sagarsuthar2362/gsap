const greetings = [
  "Hello",
  "Hola",
  "Bonjour",
  "Namaste",
  "Ciao",
  "Hallo",
  "Konnichiwa",
];

let i = 0;
const tl = gsap.timeline();

greetings.forEach((word) => {
  tl.to("#greeting", {
    opacity: 0,
    duration: 0.1,
    onComplete: () => {
      document.getElementById("greeting").innerText = word;
    },
  }).to("#greeting", {
    opacity: 1,
    duration: 0.1,
  });
});

tl.to("#loader", {
  y: "-100%",
  duration: 1,
  delay: 0.3,
});

tl.to("#main", {
  opacity: 1,
  duration: 1,
});
