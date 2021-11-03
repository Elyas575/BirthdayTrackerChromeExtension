let DateOfBirthZ =""
let  x = ""
let mybirthdays = []
const inputbutton = document.getElementById("input-btn-save")
const ClearButton = document.getElementById("input-btn-delete")
const UlEl = document.getElementById("ul-el")

/*USer Input */
const userName=document.getElementById("name-el");
const userInput=document.getElementById("userInput-el")
let datetoday = userInput.value


let BirthdaysFromLocalStorage = JSON.parse(localStorage.getItem("mybirthdays"))


let  jsonString = JSON.stringify(BirthdaysFromLocalStorage)
     



//* get the index of the last character
// slice until the last character -2

if(datetoday == jsonString){
    console.log("Happy Birthday!")

}else {
    
}

if(BirthdaysFromLocalStorage){
    mybirthdays = BirthdaysFromLocalStorage;
    render(mybirthdays) 
}

inputbutton.addEventListener("click", function InputSave(){

    mybirthdays.push(userName.value)
    mybirthdays.push(userInput.value)
    
  
     console.log(x)
      
    userName.value=""
    userInput.value =""

   
    render(mybirthdays)
    localStorage.setItem("mybirthdays", JSON.stringify(mybirthdays))

     console.log(DateOfBirthZ)
     console.log(mybirthdays)   
    
 
    
})

function render(birthday){
let itemlist = "";

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