
let gross_pay=document.getElementById("gross_pay");
function calculate(){

    //------------ grose pay section--------------------
    let Hr_wages=document.getElementById("Hr_wages").value;
    let Hr_work=document.getElementById("Hr_work").value;
    let gross_pay_sum=Hr_wages*Hr_work;
    gross_pay.innerText=`$${gross_pay_sum}`;
    gross_pay.style="color:#087575";
// --------------------end-----------------------

// ----------------state name change-----------------
let state=document.getElementById("state").value;
let sdi=document.getElementById("sdi");
let Stax=document.getElementById("S_tax");
sdi.innerText=`${state} SDI`;
Stax.innerText=`${state} State Tax`;
// --------------------end-----------------------

//--------------------%of tax applied-------------------
let total_tax=100;

let F_I_tax=7.3;
let sdi_tax=1.1;
let S_tax=2.26;

let S_Sec=6.2;
let M_crae=1.45;
let A_med=1.2;






}