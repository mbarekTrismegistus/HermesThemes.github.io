 


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      let list = document.querySelectorAll(".indic")
      list.forEach((el) => {
        if(entry.target.getAttribute("data-section") == el.getAttribute("data-section")){
          el.classList.add("sideIconsActive")
          if(entry.target.getAttribute("data-section") == 'skills'){
            console.log("triggered")
            anime({
              targets: '.skillCard',
              left: 0,
              opacity: 1,
              delay: anime.stagger(500),
              easing: 'easeInOutQuad',
              duration: 1200
            })
          }
        }
        else{
          el.classList.remove("sideIconsActive")
        }
        
      })
      
    }
    
  })
}, {threshold: 0.2})

let barItems = document.querySelectorAll("main")
barItems.forEach((el) => observer.observe(el))



const showObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      console.log(entry)
      anime({
        targets: entry.target,
        opacity: 1,
        top: 0,
        easing: 'easeInOutQuad',
        duration: 1000
      })
      
    }
    
    
  })
})

let showItems = document.querySelectorAll(".show")
showItems.forEach((el)=> showObserver.observe(el))

let autoWrite = new Typed(".name",{
  strings: ["HERMES", "A Full Stack Web Dev", "A Designer"],
  typeSpeed: 200,
  backSpeed: 100,
  loop: true
})


const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      
      
      anime({
        targets: entry.target,
        width: `${entry.target.getAttribute("data-progress")}%`,
        easing: 'easeInOutQuad',
        duration: 2000
      })
      
    }
    
    
  })
})

let bars = document.querySelectorAll(".bar-progress")
bars.forEach((el)=> progressObserver.observe(el))


const timelineLeftObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      
      anime({
        targets: entry.target,
        left: '-10%',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000
      })
      
    }
    
    
  })
})

let leftContent = document.querySelectorAll(".left")
leftContent.forEach((el)=> timelineLeftObserver.observe(el))


const timelinerightObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      
      anime({
        targets: entry.target,
        left: '50%',
        opacity: 1,
        easing: 'easeInOutQuad',
        duration: 1000
      })
      
    }
    
    
  })
})

let rightContent = document.querySelectorAll(".right")
rightContent.forEach((el)=> timelinerightObserver.observe(el))



function openSideMenu(){
  
  anime({
        targets: '.sidenav',
        width: "250px",
        easing: 'easeInSine',
        duration: 400
      })
}


function closeSideMenu(){
  
  anime({
        targets: '.sidenav',
        width: "0px",
        easing: 'easeInSine',
        duration: 400
      })
}


const root = document.querySelector(':root');

function changeColor(color){
  root.style.setProperty('--primary-color', `${color.primary}`);
  root.style.setProperty('--secondary-color', `${color.secondary}`);
  root.style.setProperty('--svg-primary', `${color.svgP}`);
  root.style.setProperty('--svg-second', `${color.svgS}`);
  root.style.setProperty('--shadow-color', `${color.shadowClr}`);
}

 
jumpTo = (obj) => {
  scrollTo({
      top: document.querySelector(obj).offsetTop,
      left: 0,
      behavior: 'smooth'
  });
  window.location = `${obj}`;
};


customElements.whenDefined('spline-viewer').then(() => {
  let customElem = document.querySelector(".spline");
  let shadow = customElem.shadowRoot;
  const sheet = new CSSStyleSheet();
  sheet.insertRule("a { opacity: 0; }");
  sheet.insertRule("svg { opacity: 0; }");
  sheet.insertRule("div { width: 100%; }");
  sheet.insertRule("div { height: 100%; }");
  shadow.adoptedStyleSheets = [sheet];
} )


$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    },
    navigation : true,
    navigationText : ["prev","next"],
    pagination : true,
    paginationNumbers: true,
  });
});




















