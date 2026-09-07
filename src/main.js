import gsap from "gsap";

const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });

tl.to(".box1", { duration: 1, rotation: -360 })
  .to(".box2", { duration: 2, x: -100, ease: "elastic.out" })
  .to(".box3", { duration: 2, rotation: 360, x: 100, ease: "expo.out" });

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    tl.pause();

    gsap.to(box, {
      scale: 1.25,
      filter: "brightness(1.2)",
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  });

  box.addEventListener("mouseleave", () => {
    gsap.to(box, {
      scale: 1,
      rotation: 0,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      filter: "brightness(1)",
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
      onComplete: () => {
        tl.play();
      },
    });
  });
});

gsap.fromTo(
  ".box",
  {
    y: 120,
    scale: 0.1,
    rotation: -90,
    opacity: 0,
  },
  {
    y: 0,
    scale: 1,
    rotation: 0,
    opacity: 1,
    duration: 1.2,
    ease: "back.out(1.7)",
    stagger: 0.25,
    delay: 0.2,

    onComplete: () => {
      gsap.delayedCall(0.5, () => tl.play());
    },
  },
);
