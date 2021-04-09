// // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCtT2TSFyLKwqmf0g135g0nJ-lMvKFbZSM",
//     authDomain: "fblogin-ea527.firebaseapp.com",
//     projectId: "fblogin-ea527",
//     storageBucket: "fblogin-ea527.appspot.com",
//     messagingSenderId: "484142195411",
//     appId: "1:484142195411:web:d6fe458f1840fda9052a26",
//     measurementId: "G-SNMC0LFYPP"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
 

let login = document.querySelector(".login-form");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailList = document.querySelector(".email-list")

function afterSubmit(e){
    e.preventDefault();
    if(email.value == "" || password.value == ""){
        alert('Login Credentials are Incorrect.');
    }
    else{
        let item = document.createElement("li");
        item.innerHTML = email.value;
        emailList.appendChild(item);
        email.value = ""
        password.value = ""
    }
}

// login.addEventListener("submit", afterSubmit);

// login.addEventListener("submit", (e) => {
//     e.preventDefault()
//     checkInputs()
// })
// function checkInputs(){
    
//     const $emailValue = email.value.trim()
//     const passwordValue = password.value.trim()
//     if($emailValue == "" || passwordValue == ""){
//         alert('Login Credentials are Incorrect.');
//     }
//     else{
//         saveData($emailValue, passwordValue)
//         alert('Success!')
//     }
// }
// function saveData($emailValue, passwordValue){
//     firebase.database().ref('Userdata/'+$emailValue).set({
//         email: $emailValue,
//         password: passwordValue,
//     })
// }
