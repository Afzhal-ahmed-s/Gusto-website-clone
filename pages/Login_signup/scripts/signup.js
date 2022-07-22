let userData = JSON.parse(localStorage.getItem("UserData")) || [];
document.querySelector("#getstarted").addEventListener("click",myFunction);
function myFunction(event){
    event.preventDefault();

    let obj = {
            name:document.getElementById('name').value,
            email:document.getElementById('email').value,
            c_name:document.getElementById('companyName').value,
            no_of_emp:document.getElementById('no_of_emp').value,
            com_phone:document.getElementById('com_phone').value,
            password:document.getElementById('password').value,
            Confirm_pass:document.getElementById('Confirm').value,
    }
    if(obj.password.length>7&&obj.com_phone.length==10&&obj.password===obj.Confirm_pass){
        document.getElementById("progress_bar").value=100;
        document.querySelector("#more").style.color = "green";
        
    userData.push(obj);
    console.log(userData);
    localStorage.setItem("UserData",JSON.stringify(userData));
    window.location.href="login.html";
    }else if(obj.password.length<7){
        document.getElementById("progress_bar").value=5;
        document.querySelector("#more").style.color = "red";
        
    }
}
