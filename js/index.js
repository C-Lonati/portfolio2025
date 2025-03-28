gsap.registerPlugin(ScrollTrigger);
let panels = gsap.utils.toArray(".parallaxItem");
let chartBar = gsap.utils.toArray('.chartBar');
let contact = document.querySelector('.contactMe');
let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));
let about = gsap.utils.toArray('.about');
let links = gsap.utils.toArray('.lnb a');
panels.forEach((item) => {
    let color = item.getAttribute("data-bgcolor");

    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.0,
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.0,
        }),
    });
});

about.forEach((about) => {
    gsap.to(about, {
        scrollTrigger: {
            trigger: "#about",
            start : "top 50%",
            toggleActions: "play"
        },
        top: 0, opacity: 1, duration: 1.5,
    });
});

chartBar.forEach((chartBar) => {
    let score = chartBar.getAttribute("data-score");
    gsap.to(chartBar, {
        scrollTrigger: {
            trigger: "#skills",
            start : "top 50%",
            toggleActions: "play play restart restart"
        },
        width: score, duration: 1.5,
    });
});
gsap.to(contact,{
    scrollTrigger: {
        trigger: "#contact",
        start : "top 50%",
        toggleActions: "restart",
    },opacity:1 ,bottom : '40%', duration : 1.5,
});


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
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" });
    });
});
function setActive(link) {
    links.forEach(el => el.classList.remove("focus"));
    link.classList.add("focus");
}

const chartBack = document.querySelectorAll('.chartBack');
const skillInfo = document.querySelector('.skillInfo');
chartBack.forEach(e => {
    e.addEventListener('mouseover', (event) => {
        let temp = e.parentNode.firstElementChild.innerText + ' : ' + e.querySelector('.chartBar').getAttribute('data-score');
        skillInfo.innerHTML = temp;
        skillInfo.style.display = 'block';
        skillInfo.style.top = event.clientY - 60 + 'px';
        skillInfo.style.left = event.clientX + 20 + 'px';
    });
    e.addEventListener('mouseleave', () => {
        skillInfo.innerHTML = '';
        skillInfo.style.display = 'none';
    });
});



/*let lastWidth;
if($(window).width() >= 1280){
    lastWidth = 1;
    ScrollTrigger.create({
        snap: {
            snapTo: (progress, self) => {
                let panelStarts = tops.map(st => st.start),
                    snapScroll = gsap.utils.snap(panelStarts, self.scroll());
                return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
            }, duration: 0.5
        }
    });
}else lastWidth = 0;
let timer=null;
$(window).on('resize',()=>{
	clearTimeout(timer);
	timer = setTimeout(function(){
        if(($(window).width() >= 1280 && !lastWidth) || ($(window).width() < 1280 && lastWidth)){
            location.reload();
        }
    },200);
});*/