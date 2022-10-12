let UserData = JSON.parse(localStorage.getItem("UserData"));
// console.log(UserData);
document.getElementById("form").addEventListener("submit",myFunction);
let container = document.getElementById("container");
function myFunction(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(UserData===null){
      alert("You don't have an account!");
    }else{
      let flag = false;
      UserData.forEach((el) => {
        if(el.email===email&&el.password===password){
          flag=true;
          localStorage.setItem("username",JSON.stringify(el.name));
          return;
      }   
      
     
    });

    if(flag===true){
      alert("login successfully!");
        window.location.href="index.html";
    }else{
        alert("Invalid Password !");
    }
      console.log("happy");
    }
   
}


let username = JSON.parse(localStorage.getItem("username")) || "";

if(username.length<=0){
  username="sign in";
}
console.log("username:",username);

document.getElementById("email").addEventListener("mouseenter",mouseFun);

function mouseFun(){
document.getElementById("email").style.backgroundColor="#f3fafb";
document.getElementById("email").style.borderBottom="4px solid";
document.getElementById("email").style.borderColor="teal";
}
document.getElementById("email").addEventListener("mouseleave",mouseFun1);

function mouseFun1(){
document.getElementById("email").style.backgroundColor="#f1f1f1";
document.getElementById("email").style.borderBottom="2px solid";
document.getElementById("email").style.borderColor="gray";
}



document.getElementById("password").addEventListener("mouseenter",mouseFun2);

function mouseFun2(){
document.getElementById("password").style.backgroundColor="#f3fafb";
document.getElementById("password").style.borderBottom="4px solid";
document.getElementById("password").style.borderColor="teal";
}
document.getElementById("password").addEventListener("mouseleave",mouseFun3);

function mouseFun3(){
document.getElementById("password").style.backgroundColor="#f1f1f1";
document.getElementById("password").style.borderBottom="2px solid";
document.getElementById("password").style.borderColor="gray";
}
