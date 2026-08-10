console.log("farhan")

// let farhanKhans = document.getElementsByClassName("box")
// console.log(farhanKhans)

// farhanKhans[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "yellow"

// document.querySelector(".box").style.backgroundColor = "Green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "Green"
})