let db = JSON.parse(localStorage.getItem("tracks")) || ["SEL1001","SEL1002"];

function track(){
let val = document.getElementById("trackInput").value;

if(db.includes(val)){
document.getElementById("trackResult").innerText =
"Package is in transit 🚚";
} else {
document.getElementById("trackResult").innerText =
"Tracking not found ❌";
}
}

/* LOGIN */
function login(){
let u=document.getElementById("user").value;
let p=document.getElementById("pass").value;

if(u==="admin" && p==="1234"){
document.querySelector(".login").style.display="none";
document.getElementById("dash").style.display="block";
loadTracks();
} else {
alert("Wrong login");
}
}

/* RESET PASSWORD */
function resetPass(){
alert("Reset link sent to marcuslewis776@gmail.com or Telegram 18323597616");
}

/* ADD TRACK */
function addTrack(){
let val=document.getElementById("newTrack").value;
db.push(val);
localStorage.setItem("tracks", JSON.stringify(db));
loadTracks();
}

/* SHOW LIST */
function loadTracks(){
let list=document.getElementById("list");
list.innerHTML="";
db.forEach(t=>{
list.innerHTML+=`<li>${t}</li>`;
});
}

/* CHATBOT */
function send(){
let msg=document.getElementById("msg").value;
let chat=document.getElementById("chat");

let reply="I can help you track packages.";

if(msg.toLowerCase().includes("track")){
reply="Enter your tracking number above.";
}

chat.innerHTML+=`<p><b>You:</b> ${msg}</p>`;
chat.innerHTML+=`<p><b>AI:</b> ${reply}</p>`;

document.getElementById("msg").value="";
}
