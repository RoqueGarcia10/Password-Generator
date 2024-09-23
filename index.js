const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let box1 = document.getElementById("blank-box1")
let box2 = document.getElementById("blank-box2")

function generate() {
    let randomPassword = ""
    let randomPassword2 = ""
    for (let i = 0; i < 14; i++ ){
        let randomIndex = Math.floor( Math.random() * characters.length)
        randomPassword += characters[randomIndex] 
        box1.textContent = randomPassword

        
        let randomIndex2 = Math.floor( Math.random() * characters.length)
        randomPassword2 += characters[randomIndex2] 
        box2.textContent = randomPassword2
    }
}





