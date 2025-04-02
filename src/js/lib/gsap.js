// gsap.registerPlugin(ScrollTrigger), document.addEventListener("DOMContentLoaded", () => {

//     let r = document.querySelectorAll(".roll-animate");
//     r.forEach(r => {
//         let t = r.querySelector(".top-about__border-01"),
//                 e=r.querySelector(".top-about__img-01")   

//     })
   

// }) 

// gsap.registerPlugin(ScrollTrigger);

// gsap.to(".ttl-01__en", {

//     scrollTrigger:{
//         trigger:".ttl-01__en",
//         start: "top center",
//         end: "top 100px",
//         scrub: true,
//         marker: true
//     },
//     x:400,
//     rotation:360,
//     ease: "none",
//     duration:3

  
// })

// gsap.registerPlugin(ScrollTrigger), document.addEventListener("DOMContentLoaded", () => {
//     let r = document.querySelectorAll(".fade-up-text");
//     r.forEach(r => {
//         let t = r.querySelector(".ttl-01__en"),
//             e = r.querySelector(".ttl-01__jp"),
//             o = t.innerText.split("").map(r => `<span>${r}</span>`).join("");
//         t.innerHTML = o, gsap.from(t.querySelectorAll("span"), {
//             opacity: 0,
//             y: 70,
//             stagger: .1,
//             duration: 2,
//             ease: "power2.out",
//             scrollTrigger: {
//                 trigger: r,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 scrub: !0,
//                 once: !0
//             }
//         }), gsap.to(e, {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power2.out",
//             delay: 3,
//             scrollTrigger: {
//                 trigger: r,
//                 start: "top 80%",
//                 end: "bottom 20%",
//                 scrub: !0,
//                 once: !0
//             }
//         })
//     })
// }), gsap.utils.toArray("section").forEach((r, t) => {
//     gsap.from(r, {
//         y: 0,
//         duration: 2,
//         scrollTrigger: {
//             trigger: r,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: !0,
//             markers: !1
//         }
//     })
// });