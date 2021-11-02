let datetoday="sdffgg"

let mybirthdays = []

const inputbutton = document.getElementById("input-btn-save")
const ClearButton = document.getElementById("input-btn-delete")

/*USer Input */
const userName=document.getElementById("name-el");
const userInput=document.getElementById("userInput-el")


let BirthdaysFromLocalStorage = JSON.parse(localStorage.getItem("mybirthdays"))
console.log(typeof BirthdaysFromLocalStorage)

const  jsonString= JSON.stringify(BirthdaysFromLocalStorage)

const userArray=Object.keys(BirthdaysFromLocalStorage)

console.log(typeof userArrayS)
console.log(userArray[0])
console.log(userArray)
   



if(BirthdaysFromLocalStorage){
    mybirthdays = BirthdaysFromLocalStorage;
    
    render(mybirthdays) 
}

inputbutton.addEventListener("click", function InputSave(){

    mybirthdays.push(userName.value)
    mybirthdays.push(userDay.value)
 

    userName.value=""
    userDay.value=""
    userMonth.value=""
    userYear.value=""

    
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