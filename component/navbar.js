let username = JSON.parse(localStorage.getItem("username")) || "";
if(username.length<=0){
  username="Sign in";
}
// console.log("username:",username);

function Navbar(){
    return`
    <div id="Navbar_1">
        <div id="Navbar_right">

            <div id="Image">
                <img id="logo"
                    src="https://prod.gusto-assets.com/assets/svg/header/gusto-logo-bfed4fde4bd2b5dd364ab0e58f77fc90aeefa2f1ecdb7fff524279642e23f9c2.svg"
                    alt="logo">
            </div>
            <div id="heading">
                <a href="WhyGusto.html" id="head">Why Gusto</a>
            </div>
            <div id="heading">
                <a href="" id="head">Payroll and more</a> <span><i class="fa-solid fa-angle-down"></i></span>
            </div>
            <div id="heading">
                <a href="" id="head">Pricing</a>
            </div>
            <div id="heading">
                <a href="" id="head">For Accountants</a><span><i class="fa-solid fa-angle-down"></i></span>
            </div>
            
                <div class="dropdown">
                    <span id="head1">Resources</span><span><i class="fa-solid fa-angle-down"></i></span>
                    <div class="dropdown-content">
                    <p><a href="" id="hh">Calculators and tools</a><br>
                        <a href="">Tax calculators,checklists,<br> compensation tools, and more</a>
                    </p>
                    <p><a href="" id="hh">Calculators and tools</a><br>
                        <a href="">Tax calculators,checklists,<br> compensation tools, and more</a>
                    </p>
                    </div>
                  </div>
                  <div class="dropdown">
                    <span id="head1">Built for you</span><span><i class="fa-solid fa-angle-down"></i></span>
                    <div class="dropdown-content">
                    <p><a href=""> Starting a business?</a>
                    </p>
                    <p><a href="" id="hh">Calculators and tools</a><br>
                        <a href="">Tax calculators,checklists,<br> compensation tools, and more</a>
                    </p>
                    </div>
                  </div>
             </div>
        <div id="button_right">
            <div id="btn_mag">
                <span><i class="fa-solid fa-magnifying-glass"></i></span><button id="Search_button">Search</button>
            </div>
            <div>
                <button id="Sign_in"><a href="">${username}</a></button>
            </div>
            <div id="Create_Account">
                <button id="craete_btn"><a href="" class="textcreate"> Create Account</a></button>
            </div>
        </div>
    </div>
    `;
}
export default Navbar;
