import Navbar from "/component/navbar.js";
    document.getElementById("Navbar").innerHTML =Navbar();

    import footer from "/component/footer.js";
    document.getElementById("Footer").innerHTML =footer();

    let username = JSON.parse(localStorage.getItem("username")) || "";
    let user=0;
let create ="Create Account";
if(username.length<=0){
    
    // console.log(create);
  username="Sign in";
}else{
     user = 1;
    create="Sign out";
 
}
if(user===1){
    document.getElementById("craete_btn").addEventListener("click",logoutFun);
    function logoutFun(){
          localStorage.removeItem('username');
        //   window.location.href="index.html";
    }
}