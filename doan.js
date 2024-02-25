const adressbtn =document.querySelector('#adress-form')
const adressclose =document.querySelector('#adress-form-close')
//console.log(adressclose)
adressbtn.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display="flex"
})
adressclose.addEventListener("click", function()
{
    document.querySelector('.adress-form').style.display="none"
})
//slider-----------------------
const rightbtn = document.querySelector('.fa-chevron-right')
const leftbtn = document.querySelector('.fa-chevron-left')
const imgnumber = document.querySelectorAll('.slider-container-left-top img')
console .log (imgnumber.length)
let index=0
rightbtn.addEventListener ("click", function(){
    index = index+1
    if(index>imgnumber.length-1)
    {
        index=0
    }
    document.querySelector(".slider-container-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener ("click",function(){
    index=index-1
    if(index<0)
    {
        index=imgnumber.length-1
    }
    document.querySelector(".slider-container-left-top").style.right = index *100+"%"
})
//slider1----------------------------
const rightbtn2 = document.querySelector('.fa-chevron-right-2')
const leftbtn2 = document.querySelector('.fa-chevron-left-2')
const imgnumber2 = document.querySelectorAll('.slider-product-one-content-items')
console .log (imgnumber2.length)
//console.log(rightbtn2)
//console.log(leftbtn2)
rightbtn2.addEventListener ("click", function(){
    index = index+1
    if(index>imgnumber2.length-1)
    {
        index=0
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})
leftbtn2.addEventListener ("click",function(){
    index=index-1
    if(index<0)
    {
        index=imgnumber2.length-1
    }
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
})

function carttotal (){
    var cartItem =document.querySelectorAll(".main3 p span")
    var total =0
    for(var i=0;i<cartItem.length;i++)
    {
        var inputvalue=cartItem[i].querySelector("input").value
        console.log(inputvalue)
        var productPrice =cartItem[i].querySelector("span").innerText
        console.log(productPrice)
    }
}
//-------------
function inputchange (){
    var cartItem =document.querySelectorAll(".main3 p")
    for(var i=0;i<cartItem.length;i++){
        var inputvalue =cartItem[i].querySelector("input")
        inputvalue.addEventListener("change",function(){
            carttotal()
        })
    }
}