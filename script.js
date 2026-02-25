/* Custom Cursor */
const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
cursor.style.left=e.clientX+'px';
cursor.style.top=e.clientY+'px';
});

/* Reveal */
const reveals=document.querySelectorAll('.reveal');
window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add('active');
}
});
});

/* Magnetic CTA */
document.querySelectorAll('.magnetic').forEach(btn=>{
btn.addEventListener('mousemove',e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
btn.style.transform=`translate(${(x-rect.width/2)/6}px, ${(y-rect.height/2)/6}px) scale(1.08)`;
});
btn.addEventListener('mouseleave',()=>{
btn.style.transform='translate(0,0) scale(1)';
});
});

/* 3D Tilt Cards */
document.querySelectorAll('.card').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
const centerX=rect.width/2;
const centerY=rect.height/2;
card.style.transform=`rotateX(${-(y-centerY)/15}deg) rotateY(${(x-centerX)/15}deg)`;
});
card.addEventListener('mouseleave',()=>{
card.style.transform='rotateX(0) rotateY(0)';
});
});

/* Before After Slider */
const range=document.querySelector('.range');
const before=document.querySelector('.before');

range.addEventListener('input',()=>{
before.style.clipPath=`inset(0 ${100-range.value}% 0 0)`;
});
