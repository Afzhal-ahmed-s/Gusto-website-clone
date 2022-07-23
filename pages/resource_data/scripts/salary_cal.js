let gross_pay = document.getElementById("gross_pay");
function calculate() {
  //------------ grose pay section--------------------
  let Hr_wages = document.getElementById("Hr_wages").value;
  let Hr_work = document.getElementById("Hr_work").value;
  let gross_pay_sum = Hr_wages * Hr_work;
  gross_pay.innerText = `$${gross_pay_sum}`;
  gross_pay.style = "color:#087575";
  // --------------------end-----------------------

  // ----------------state name change-----------------
  let state = document.getElementById("state").value;
  let sdi = document.getElementById("sdi");
  let Stax = document.getElementById("S_tax");
  sdi.innerText = `${state} SDI`;
  Stax.innerText = `${state} State Tax`;
  // --------------------end-----------------------

  //--------------------%of tax applied-------------------
  let total_tax = 100;

  let F_I_tax = 7.3;
  let sdi_tax = 1.1;
  let S_tax = 2.2;

  let federaltax = document.getElementById("F_I_tax");
  federaltax.innerText = `${F_I_tax}%`;

  let Sdi = document.getElementById("sdi_tax");
  Sdi.innerText = `${sdi_tax}%`;

  let State_tax = document.getElementById("S_Tax");
  State_tax.innerText = `${S_tax}%`;

  let S_Sec = 6.2;
  let M_care = 1.4;
  let A_med = 1.2;

  let social_s = document.getElementById("S_Sec");
  social_s.innerText = `${S_Sec}%`;

  let medicare = document.getElementById("M_care");
  medicare.innerText = `${M_care}%`;

  let A_medicare = document.getElementById("A_med");
  A_medicare.innerText = `${A_med}%`;
  //------------end-----------------------------
  let diduct2 = F_I_tax + sdi_tax + S_tax;
  diduct2 = Number(diduct2.toFixed(2));
  let diduct3 = S_Sec + M_care + A_med;
  diduct3 = Number(diduct3.toFixed(2));
  let Home_pay = document.getElementById("per5");
  let diduct = total_tax - diduct2 - diduct3;
  diduct =Number(diduct.toFixed(2));
  Home_pay.innerText = `${diduct}%`;

  let income = document.getElementById("income");
  income.innerText = `${diduct2}%`;

  let F_D_I = document.getElementById("F_D_I");

  F_D_I.innerText = `${diduct3}%`;

  // --------------  tax percentage dollar-------------------
  let tax_rup1 = document.getElementById("tax_rup1");
  let tax_rup2 = document.getElementById("tax_rup2");
  let tax_rup3 = document.getElementById("tax_rup3");
  let tax_rup4 = document.getElementById("tax_rup4");
  let tax_rup5 = document.getElementById("tax_rup5");
  let tax_rup6 = document.getElementById("tax_rup6");

  let tax_rup1_total = (gross_pay_sum * F_I_tax) / 100;
  tax_rup1_total =Number(tax_rup1_total.toFixed(2));
  tax_rup1.innerText = `$${tax_rup1_total}`;

  let tax_rup2_total = (gross_pay_sum * sdi_tax) / 100;
  tax_rup2_total =Number(tax_rup2_total.toFixed(2));
  tax_rup2.innerText = `$${tax_rup2_total}`;

  let tax_rup3_total = (gross_pay_sum * S_tax) / 100;
  tax_rup3_total =Number(tax_rup3_total.toFixed(2));
  tax_rup3.innerText = `$${tax_rup3_total}`;

  let income_tax_total = document.getElementById("tax_perst2");
  let sum1 = tax_rup1_total + tax_rup2_total + tax_rup3_total;
 
  console.log(sum1)
  income_tax_total.innerText = `$${sum1}`;

  //-----------------------------------------

  let tax_rup4_total = (gross_pay_sum * S_Sec) / 100;
  tax_rup4_total =Number(tax_rup4_total.toFixed(2));
  tax_rup4.innerText = `$${tax_rup4_total}`;

  let tax_rup5_total = (gross_pay_sum * M_care) / 100;
  tax_rup5_total =Number(tax_rup5_total.toFixed(2));
  tax_rup5.innerText = `$${tax_rup5_total}`;

  let tax_rup6_total = (gross_pay_sum * A_med) / 100;
  tax_rup6_total =Number(tax_rup6_total.toFixed(2));
  tax_rup6.innerText = `$${tax_rup6_total}`;

  let sdi_tax_total = document.getElementById("tax_perst3");
  let sum2=tax_rup4_total + tax_rup5_total + tax_rup6_total;
 sum2=Number(sum2.toFixed(2));
 
 console.log(sum2);
  sdi_tax_total.innerText = `$${sum2}`;

  //------------------------------------

  let Total_home_pay = document.getElementById("T_rup");
  let pay = gross_pay_sum - (sum1 + sum2);
  pay = Number(pay.toFixed(2));
  Total_home_pay.innerText = `$${pay}`;

  let heading_pay = document.getElementById("heading_pay");
  heading_pay.innerText = `$${pay}`;
}

let id;
function debounce(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}
