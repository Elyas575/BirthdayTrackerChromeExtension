let mybirthdays = []

const inputbutton = document.getElementById("input-btn-1")
const ClearButton = document.getElementById("input-btn-3")
const inputEl = document.getElementById("input-el")
const UlEl = document.getElementById("ul-el")
let BirthdaysFromLocalStorage = JSON.parse(localStorage.getItem("mybirthdays"))
console.log(BirthdaysFromLocalStorage)

if(BirthdaysFromLocalStorage){
    mybirthdays = BirthdaysFromLocalStorage;
    render(mybirthdays)
}

inputbutton.addEventListener("click", function InputSave(){
console.log(mybirthdays)
    mybirthdays.push(inputEl.value) 
    inputEl.value = ""
    localStorage.setItem("mybirthdays", JSON.stringify(mybirthdays))
    render(mybirthdays)
})

function render(birthday){
let itemlist = "";
for(i =0; i < mybirthdays.length; i++){     
    itemlist += 
    `<li>
        <a  target='_blank'  ${birthday[i]}>" ${birthday[i]}   "</a>
     </li>`
}
UlEl.innerHTML = itemlist
}
function display() {
    document.
    getElementById("box-1").style.minWidth = "50px";
 }
 
 ClearButton.addEventListener("click", function DeleteAll(){

    localStorage.clear()
    mybirthdays = []
    render(mybirthdays)
 })