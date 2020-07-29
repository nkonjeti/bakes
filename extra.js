// Your web app's Firebase configuration
// Your web app's Firebase configuration
// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyB5ZpidJzlduaPTLpPwMn8kZ6Vqr1u_RhM",
   authDomain: "bakes-474e7.firebaseapp.com",
   databaseURL: "https://bakes-474e7.firebaseio.com",
   projectId: "bakes-474e7",
   storageBucket: "bakes-474e7.appspot.com",
   messagingSenderId: "812788273846",
   appId: "1:812788273846:web:7d4f4dcd9cb92a64d24c17"
 };
 // Initialize Firebase
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore();

 const submitBtn = document.querySelector("#submit");
 let userName = document.querySelector("#userFullName");
 let userEmail = document.querySelector("#userEmail");
 let userMessage = document.querySelector("#userMessage");
const db = firestore.collection("contactInfo");

document.getElementById("submit").addEventListener("click", function(){
//submitBtn.addEventListener("click", function() {
let userNameInput = userName.value;
let userEmailInput = userEmail.value;
let userMessageInput = userMessage.value;

//Access Database
db.doc()
 .set({
name: userNameInput,
email: userEmailInput,
message: userMessageInput
})
.then(function() {
console.log("Data Saved");
 })
.catch(function(error) {
console.log(error);
});
});
