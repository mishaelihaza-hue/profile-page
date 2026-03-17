const words = ["Web Developer","Frontend Developer","Website Designer"]

let i=0
let j=0
let currentWord=""
let isDeleting=false

function type(){

currentWord = words[i]

if(!isDeleting){

document.getElementById("typing").textContent = currentWord.substring(0,j+1)
j++

if(j==currentWord.length){
isDeleting=true
setTimeout(type,1000)
return
}

}

else{

document.getElementById("typing").textContent = currentWord.substring(0,j-1)
j--

if(j==0){
isDeleting=false
i++
if(i==words.length){
i=0
}
}

}

setTimeout(type,150)

}

type()
