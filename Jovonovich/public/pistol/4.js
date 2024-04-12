let image=document.getElementById('img')
let postu=document.getElementsByClassName('posture_image')
console.log(postu)

postu[0].addEventListener('click',()=>{
    console.log(postu[0].lastChild.getAttribute('src'))
    let a=postu[0].lastChild.getAttribute('src')
    image.lastElementChild.setAttribute('src',a);
    console.log(typeof a)  
})

postu[1].addEventListener('click',()=>{
    console.log(postu[1].lastChild.getAttribute('src'))
    let a=postu[1].lastChild.getAttribute('src')
    image.lastElementChild.setAttribute('src',a);
    console.log(typeof a)  
})
postu[2].addEventListener('click',()=>{
    console.log(postu[2].lastChild.getAttribute('src'))
    let a=postu[2].lastChild.getAttribute('src')
    image.lastElementChild.setAttribute('src',a);
    console.log(typeof a)  
})
postu[3].addEventListener('click',()=>{
    console.log(postu[3].lastChild.getAttribute('src'))
    let a=postu[3].lastChild.getAttribute('src')
    image.lastElementChild.setAttribute('src',a);
    console.log(typeof a)  
})
