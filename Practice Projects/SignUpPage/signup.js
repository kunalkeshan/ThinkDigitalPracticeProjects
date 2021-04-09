let signUp = document.querySelector(".signup-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let Name = document.getElementById("name");
let userName = document.getElementById("username");
let dob = document.getElementById("dob");
let passwordReenter = document.getElementById("passwordReenter");
let student = document.getElementById("student-yes");
let uniName = document.getElementById("uniName");
let branch = document.getElementById("branch");
let tableData = document.querySelector(".table-data")


function afterSubmit(e){
    console.log('hello')
    e.preventDefault();
    if(email.value == "" || password.value == "" || Name.value == ""  || userName.value == "" || dob.value == "" || passwordReenter.value == ""){
    
        alert('Login Credentials are Incorrect.');
    }
    else{
       
        let item = document.createElement("tr");
        let item1 = document.createElement("td");
        item.innerText = item1;
        item1.innerHTML = email.value + password.value + userName.value 
        tableData.appendChild(item1);
        email.value = ""
        password.value = ""
        userName.value = ""
        Name.value = ""
        passwordReenter.value = ""


    }
}
signUp.addEventListener("submit", afterSubmit);