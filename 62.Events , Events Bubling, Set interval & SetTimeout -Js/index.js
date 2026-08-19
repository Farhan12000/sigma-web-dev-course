let button = document.getElementById("btn")

 //list of all Mouse Events
//https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML ="<b>You are clicked</b>enjoy your clicked !"
})

button.addEventListener("contextmenu", ()=>{
  alert("Dont hack us by Right click please")


})

document.addEventListener("keydown", (e)=>{
 console.log(e.key , e.keyCode)
}) 