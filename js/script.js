window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader")?.classList.add("hide"),450));
const navbar=document.getElementById("navbar");
window.addEventListener("scroll",()=>navbar?.classList.toggle("scrolled",scrollY>40));
const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");observer.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));
const form=document.getElementById("contactForm");
form?.addEventListener("submit",e=>{e.preventDefault();document.getElementById("toast").classList.add("show");form.reset();setTimeout(()=>document.getElementById("toast").classList.remove("show"),3200)});
const booking=document.getElementById("bookingForm");
booking?.addEventListener("submit",e=>{e.preventDefault();document.getElementById("toast").classList.add("show");booking.reset();setTimeout(()=>document.getElementById("toast").classList.remove("show"),3200)});
const date=document.querySelector('input[type="date"]');if(date){let d=new Date();date.min=d.toISOString().split("T")[0]}
