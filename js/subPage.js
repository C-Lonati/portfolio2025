gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray(".parallaxItem");
let links = gsap.utils.toArray(".nav a");
links.forEach(link => {
    let element = document.querySelector(link.getAttribute("href"));
    let linkST = ScrollTrigger.create({
        trigger: element,
        start: "top top"
    });

    ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => setActive(link),
    });

    link.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, { duration: 1, scrollTo: linkST.start - 60, overwrite: "auto" });
    });
});
function setActive(link) {
    links.forEach(el => el.classList.remove("focus"));
    link.classList.add("focus");
}
$('.color .box').each((i, e) => {
    let colorData = e.getAttribute('data-color');
    e.style.background = colorData;
});