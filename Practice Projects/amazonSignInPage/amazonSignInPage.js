// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCkVRVU3WbK2tVCvdQWLK0lpUrytfgtfcM",
    authDomain: "login-de95b.firebaseapp.com",
    databaseURL: "https://login-de95b-default-rtdb.firebaseio.com",
    projectId: "login-de95b",
    storageBucket: "login-de95b.appspot.com",
    messagingSenderId: "783864121265",
    appId: "1:783864121265:web:268333e2049ea9b3f65f90",
    measurementId: "G-SZD3JHG1M3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var signin = document.getElementById("SignIn");
// var email = document.querySelector(".emailMob");
// var noVal = document.querySelector(".noval");
// signin.addEventListener("submit", OnSubmit);
// function OnSubmit(e){
//      e.preventdefault();
//     if(email.value = " "){
//     var err = document.createElement("small");
//     err.innerText = "! Email or Mobile Number Incorrect.";
//     noVal.appendChild(err);
//     }
//     else{ 
//     var err = document.createElement("small");
//     err.innerText = " ";
//     noVal.appendChild(err);
//     // email.value = " ";
//         saveInput();
//     }
// }
// signin.addEventListener("submit", OnSubmit);
// // function saveInput(){
// //     saveData(email.value);
// // }
// // function saveData(emailvalue){
// //     firebase.database().ref('Userdata/'+email.value).set({
// //         emailPhone: email.value,
// //     })
// // }


const email = document.getElementById("Email")


signin.addEventListener('submit', (e)=>{
    e.preventDefault()
    checkInput()
})
function checkInput(){
    const emailValue = email.value
    //firebase.database().ref()
    if(emailValue == ""){
        setErrorFor(email, "!Email or Mobile Number Incorrect.")
    }
    else if(emailValue < 0 || emailValue >= 9999999999){
        alert("Please Enter the Correct input");
    }
    else{
        setSuccessFor(email)
        saveData(emailValue)
        location.reload()
        }
}
function setErrorFor(input, message){
    const email1 = input.parentElement;
    const small = email1.querySelector('small');
    small.innerText = message
    email1.className = 'user error'
}
function setSuccessFor(input){
    const email1 = input.parentElement;
    email1.className = 'user success'
}

firebase.database().ref().set()

function saveData(emailValue){
    firebase.database().ref('Userdata/' + emailValue).set({
                emailPhone: emailValue,
            })
        alert("Success")
}