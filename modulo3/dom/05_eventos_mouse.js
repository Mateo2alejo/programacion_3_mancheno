const caja=document.getElementById('caja')
caja.addEventListener('mouseover',()=>{
    caja.style.background ='yellow';
});
caja.addEventListener('mouseout',()=>{
    caja.style.background ='gray';
});
caja.addEventListener('click',()=>{
    alert('Click');
});

const areaTouch=document.getElementById('areaTouch')
areaTouch.addEventListener('touchstart',()=>{
    areaTouch.style.background ='blue';
});
areaTouch.addEventListener('touchend',()=>{
    areaTouch.style.background ='green';
});
areaTouch.addEventListener('click',()=>{
    alert('Click Area Touch');
});