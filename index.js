// toggle menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav) {
    toggle.addEventListener("click", ()=> {
      nav.classList.toggle("show")
    })
  }
}

showMenu("toggle-menu", "nav-menu")

// scroll reveal animation
const scroll = ScrollReveal ({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true
})
// home scroll
scroll.reveal(".home-title", {})
scroll.reveal(".home-scroll", {delay: 300})

// about scroll 
scroll.reveal(".about-img", {delay: 500})
scroll.reveal(".about-subtitle", {delay: 300})
scroll.reveal(".about-text", {delay: 400})
scroll.reveal(".about-link", {delay: 500})

// abilities scroll
scroll.reveal(".skills-subtitle", {})
scroll.reveal(".skills-name", {distance: "20px", delay: 50, interval: 100})
scroll.reveal(".skills-img", {delay: 400})

// work reveal
scroll.reveal(".work-img", {});

// contact scroll 
scroll.reveal(".contact-container", {})
scroll.reveal(".social-container", {delay: 300})
