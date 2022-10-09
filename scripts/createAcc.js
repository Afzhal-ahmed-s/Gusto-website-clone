


// document.getElementById("buttons").addEventListener("click",myFunction);
function myFunction(){
    // event.preventDefault();
    let back = document.createElement("h3");
    back.innerText="Back";
    let head = document.getElementById("head");
    head.innerText= "Just a few more questions.";
    let question1 = document.getElementById("line1");
    let question2 = document.getElementById("line2");
    document.getElementById("have").innerText="";
    question1.innerText="Have you run payroll yet this";
    question2.innerText = "calendar year?";
    let btns = document.getElementById("buttons");
    btns.innerHTML=null;
    let btn1 = document.createElement("button");
    btn1.innerText="Yes";
    btn1.setAttribute("id","line1");
    btn1.addEventListener("click",nextPage2);
    let btn2 = document.createElement("button");
    btn2.addEventListener("click",nextPage2);
    btn2.innerText="No"; 
    btn2.setAttribute("id","line2");
    
    back.addEventListener("click",backFun1);
    function backFun1(){
        window.location.reload();
    }

    btns.append(btn1,btn2,back);
    function nextPage2(){
        btns.innerHTML=null;
        question1.innerText="How do you currently run";
        question2.innerText = "payroll?";
        let btn1 = document.createElement("button");
    btn1.innerText="We’re new to running payroll";
    btn1.setAttribute("id","line1");
    btn1.addEventListener("click",nextPage3);
    let btn2 = document.createElement("button");
    btn2.addEventListener("click",nextPage3);
    btn2.innerText="We use another online payroll software"; 
    btn2.setAttribute("id","line2");
    let btn3 = document.createElement("button");
    btn3.addEventListener("click",nextPage3);
    btn3.innerText="We do it ourselves manually"; 
    btn3.setAttribute("id","line3");
    back = document.createElement("h3");
    back.innerText="Back";
    btns.append(btn1,btn2,btn3,back);
    back.addEventListener("click",myFunction);
        function nextPage3(){
            btns.innerHTML=null;
            question1.innerText="How would you describe your";
            question2.innerText = "business setting?";
            let btn1 = document.createElement("button");
        btn1.innerText="We work in an office";
        btn1.setAttribute("id","line1");
        btn1.addEventListener("click",nextPage4);
        let btn2 = document.createElement("button");
        btn2.addEventListener("click",nextPage4);
        btn2.innerText="We work in retail or food service"; 
        btn2.setAttribute("id","line2");
        let btn3 = document.createElement("button");
        btn3.addEventListener("click",nextPage4);
        btn3.innerText="We work in a factory, construction, or in the field"; 
        btn3.setAttribute("id","line3");
        back = document.createElement("h3");
        back.innerText="Back";
        btns.append(btn1,btn2,btn3,back);
        back.addEventListener("click",nextPage2);
        function nextPage4(){
                btns.innerHTML=null;
                question1.innerText="What type of workers do you";
                question2.innerText = "need to pay?";
                let btn1 = document.createElement("button");
            btn1.innerText="Employees (W-2s)";
            btn1.setAttribute("id","line1");
            btn1.addEventListener("click",nextPage5);
            let btn2 = document.createElement("button");
            btn2.addEventListener("click",nextPage5);
            btn2.innerText="Contractors (1099s)"; 
            btn2.setAttribute("id","line2");
            let btn3 = document.createElement("button");
            btn3.addEventListener("click",nextPage5);
            btn3.innerText="Both (W-2s & 1099s)"; 
            btn3.setAttribute("id","line3");
            back = document.createElement("h3");
            back.innerText="Back";
            btns.append(btn1,btn2,btn3,back);
            back.addEventListener("click",nextPage3);
            function nextPage5(){
                btns.innerHTML=null;
                question1.innerText="Interested in offering health";
                question2.innerText = "benefits to your team?";
                let btn1 = document.createElement("button");
            btn1.innerText="Yes";
            btn1.setAttribute("id","line1");
            btn1.addEventListener("click",nextPage6);
            let btn2 = document.createElement("button");
            btn2.addEventListener("click",nextPage6);
            btn2.innerText="No"; 
            btn2.setAttribute("id","line2");
            back = document.createElement("h3");
            back.innerText="Back";
            btns.append(btn1,btn2,back);
            back.addEventListener("click",nextPage4);
            function nextPage6(){
                btns.innerHTML=null;
                head.innerText= "One last question.";
                question1.innerText="Ready to create your account";
                question2.innerText = "and start adding your info?";
                let btn1 = document.createElement("button");
            btn1.innerText="Yes, I’m ready!";
            btn1.setAttribute("id","line1");
            btn1.addEventListener("click",nextPage7);
            let btn2 = document.createElement("button");
            btn2.addEventListener("click",nextPage8);
            btn2.innerText="No, I’d like to learn more."; 
            btn2.setAttribute("id","line2");
            back = document.createElement("h3");
            back.innerText="Back";
            btns.append(btn1,btn2,back);
            back.addEventListener("click",nextPage5);
            function nextPage7(){
                let container = document.getElementById("employees");
                container.innerHTML = null;
                let div = document.createElement("div");
                div.setAttribute("id","timediv")
                let img = document.createElement("img");
                img.setAttribute("id","time1");
                img.src = "https://prod.gusto-assets.com/assets/packs/media/icons/illo-clock-homepage-57611d12.svg";
                let img2 = document.createElement("img");
                img2.setAttribute("id","time2");
                img2.src = "https://cdn-icons-png.flaticon.com/512/6853/6853084.png";
                div.append(img,img2);
                container.append(div);
                setTimeout(()=>{
                        window.location.href="Signup.html"
                }, 1000);
                
            }
            function nextPage8(){
                window.location.reload();
            }
    }
        
        
    }
        
    }
        }
    }
}
// console.log("btn");
