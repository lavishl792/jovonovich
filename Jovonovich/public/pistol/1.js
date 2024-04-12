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






// otherScript.js
const name = localStorage.getItem('name');





document.getElementById("buyButton").addEventListener("click", async function() {
    try {
        const response = await fetch('/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                orderName: 'SAA Gun',
                customerName: name,
                totalAmount: 1800.00
            })
        });
        if (response.ok) {
            console.log('Item purchased successfully.');
        } else {
            console.error('Failed to purchase item.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

