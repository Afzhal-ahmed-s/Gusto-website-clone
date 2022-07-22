let UserData = JSON.parse(localStorage.getItem("UserData"));
console.log(UserData);
document.getElementById("signin").addEventListener("click",myFunction);

function myFunction(event){
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    UserData.forEach((el) => {
      if(el.email===email&&el.password===password){
        alert("login successfully!");
        window.location.href="index.html";
    }
        
        
    });
    console.log("happy");
}