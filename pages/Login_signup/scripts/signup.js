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

    let flag = false;
    userData.forEach((el) => {
        if(el.email===obj.email){
            flag=true;
        }
    });

    if(flag===false){
        let pass = obj.password;
        if(pass.match(/[a-z]+/)&&pass.match(/[0-9]+/)&&pass.match(/[$@#&!]+/)){
           document.getElementById("bar").style.width="100%";
           document.getElementById("bar").style.backgroundColor="teal";
           document.querySelector("#more").style.color = "green";
           
       if(obj.name.length>0&&obj.email.length>0&&obj.c_name.length>0){
           userData.push(obj);
           console.log(userData);
           localStorage.setItem("UserData",JSON.stringify(userData));
           window.location.href="login.html";
       }
  
   }else if(obj.password.length<7){
       document.getElementById("progress_bar").value=5;
       document.querySelector("#more").style.color = "red";
       
   }
    }else{
        alert("This email already used!");
    }
         
}
    document.getElementById("name").addEventListener("input",nameFun1);
    function nameFun1(event){
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
            let p1 = document.getElementById("p1");
            //   console.log("name:",obj.name.length);
        if(obj.name.length<=0){
            p1.innerText = "Hi, we’re Gusto. What’s your full name?";
            p1.style.color = "#c15732";
        //    console.log("name:",obj.name.length);
        }else if(obj.name.length>0){
               p1.innerText="";
            }
    }

    document.getElementById("email").addEventListener("input",nameFun2);
    function nameFun2(event){
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
            let p1 = document.getElementById("p2");
            //   console.log("name:",obj.name.length);
        if(obj.email.length<=0){
            p1.innerText = "You’ll sign into Gusto with this email address.";
            p1.style.color = "#c15732";
        //    console.log("name:",obj.name.length);
        }else if(obj.email.length>0){
               p1.innerText="";
            }
    }

    document.getElementById("companyName").addEventListener("input",nameFun3);
    function nameFun3(event){
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
            let p1 = document.getElementById("p3");
            //   console.log("name:",obj.name.length);
        if(obj.c_name.length<=0){
            p1.innerText = "What’s the official name of your business?";
            p1.style.color = "#c15732";
        //    console.log("name:",obj.name.length);
        }else if(obj.c_name.length>0){
               p1.innerText="";
            }
    }
    document.getElementById("password").addEventListener("input",nameFun4);
    function nameFun4(event){
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
            let p1 = document.getElementById("p4");
            let strength = document.getElementById("power");
            //   console.log("name:",obj.name.length);
        if(obj.password.length<=0){
                p1.innerText = "A valid password is required.";
                strength.innerText = "Week";
                p1.style.color = "#c15732";
                document.getElementById("bar").style.width="0%";

                document.querySelector("#one").style.color = "black";
                let img = document.getElementById("tik2");
                img.src="https://cdn-icons-png.flaticon.com/512/808/808569.png";

                document.querySelector("#min_one").style.color = "black";
                let img1 = document.getElementById("tik3");
                img1.src="https://cdn-icons-png.flaticon.com/512/808/808569.png";

                document.querySelector("#more").style.color = "black";
                let img2 = document.getElementById("tik1");
                img2.src="https://cdn-icons-png.flaticon.com/512/808/808569.png";
        //    console.log("name:",obj.name.length);
        }else if(obj.password.length>0){
            let pass = obj.password;
                p1.innerText="";
                document.getElementById("bar").style.width="5%";
                document.getElementById("bar").style.backgroundColor="crimson";
               if(obj.password.length>1){
                document.getElementById("bar").style.width="10%";
                document.getElementById("bar").style.backgroundColor="crimson";
            }
            if(obj.password.length>2){
                document.getElementById("bar").style.width="20%";
                document.getElementById("bar").style.backgroundColor="crimson";
            }
            if(obj.password.length>3){
                document.getElementById("bar").style.width="30%";
                document.getElementById("bar").style.backgroundColor="crimson";
            }
             if(obj.password.length>4){
                document.getElementById("bar").style.width="40%";
                document.getElementById("bar").style.backgroundColor="teal";
            }
            if(obj.password.length>5){
                document.getElementById("bar").style.width="50%";
                document.getElementById("bar").style.backgroundColor="teal";
            }
            if(obj.password.length>6){
                document.getElementById("bar").style.width="60%";
                document.getElementById("bar").style.backgroundColor="teal";
            }
             if(obj.password.length>7){
                document.getElementById("bar").style.width="70%";
                document.getElementById("bar").style.backgroundColor="teal";
                document.querySelector("#more").style.color = "green";
                let img = document.getElementById("tik1");
                img.src="https://cdn-icons-png.flaticon.com/512/716/716225.png";
            }else{
                document.querySelector("#more").style.color = "red";
                let img = document.getElementById("tik1");
                img.src="https://cdn-icons-png.flaticon.com/512/3389/3389152.png";
            }

            
            if(pass.match(/[a-z]+/)&&pass.match(/[0-9]+/)&&pass.length>7    ){
                console.log("happy1");
                document.getElementById("bar").style.width="80%";
                document.getElementById("bar").style.backgroundColor="teal";
               
            }
            if(pass.match(/[a-z]+/)&&pass.match(/[0-9]+/)&&pass.match(/[$@#&!]+/)){
                console.log("happy1");
                document.getElementById("bar").style.width="100%";
                document.getElementById("bar").style.backgroundColor="teal";
            }
            if(pass.match(/[a-z]+/)){
                console.log("tik")
                document.querySelector("#one").style.color = "green";
                let img = document.getElementById("tik2");
                img.src="https://cdn-icons-png.flaticon.com/512/716/716225.png";
            }else{
                document.querySelector("#one").style.color = "red";
                let img = document.getElementById("tik2");
                img.src="https://cdn-icons-png.flaticon.com/512/3389/3389152.png";
            }

            if(pass.match(/[0-9]+/)){
                document.querySelector("#min_one").style.color = "green";
                let img = document.getElementById("tik3");
                img.src="https://cdn-icons-png.flaticon.com/512/716/716225.png";
            }else{
                document.querySelector("#min_one").style.color = "red";
                let img = document.getElementById("tik3");
                img.src="https://cdn-icons-png.flaticon.com/512/3389/3389152.png";
            }
           
            
          
        }
    }
