let datetoday="sdffgg"

let mybirthdays = []
const inputbutton = document.getElementById("input-btn-save")
const ClearButton = document.getElementById("input-btn-delete")
const UlEl = document.getElementById("ul-el")

/*USer Input */
const userName=document.getElementById("name-el");
const userInput=document.getElementById("userInput-el")


let BirthdaysFromLocalStorage = JSON.parse(localStorage.getItem("mybirthdays"))
console.log(typeof BirthdaysFromLocalStorage)

const  jsonString= JSON.stringify(BirthdaysFromLocalStorage)


if(BirthdaysFromLocalStorage){
    mybirthdays = BirthdaysFromLocalStorage;
    
    render(mybirthdays) 
}

inputbutton.addEventListener("click", function InputSave(){

    mybirthdays.push(userName.value)
    mybirthdays.push(userInput.value)
 
    userName.value=""
    userInput.value =""

    localStorage.setItem("mybirthdays", JSON.stringify(mybirthdays))
    render(mybirthdays)
})

function render(birthday){
let itemlist = "";
let spacevariable = ""
for(i =0; i < mybirthdays.length; i++){     
    itemlist += 
    `<li>
          ${birthday[i]}  
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