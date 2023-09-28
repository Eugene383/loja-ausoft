let name = document.getElementById("name")
let email = document.getElementById("email")
let boxText = document.getElementById("boxText")
let form = document.getElementsByTagName("form")[0]

form.addEventListener("submit",formDefault)
function formDefault(){
    event.preventDefault()
    if(name.value==""){
        alert("Campo obrigatorio")
    }
    if(email.value==""){
        alert("Campo obrigatorio")
    }
    if(boxText.value==""){
        alert("Campo obrigatorio")
    }
    
}