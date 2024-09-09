const billEL = document.getElementById("bill")
const tipEL = document.getElementById("tip")
const btnEL = document.getElementById("btn")
const totalEL = document.getElementById("Tottal")

calcTttl()
function calcTttl() {
    const billvalue = billEL.value
    const tipvalue = tipEL.value
   const  totalvalue = billvalue * (1 + tipvalue /100)
//console.log(totalvalue);
totalEL.innerText = totalvalue
}
btnEL.addEventListener("click" ,calcTttl)