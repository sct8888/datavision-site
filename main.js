// Mobile nav
const burger=document.querySelector('.burger');
const links=document.querySelector('.nav-links');
if(burger){burger.addEventListener('click',()=>links.classList.toggle('open'));}

// Scroll reveal
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.transitionDelay=(i%4)*0.08+'s';
  io.observe(el);
});
