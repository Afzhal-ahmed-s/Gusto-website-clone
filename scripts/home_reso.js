import Navbar from "../component/navbar.js";
    document.getElementById("Navbar").innerHTML =Navbar();

    import footer from "../component/footer.js";
    document.getElementById("Footer").innerHTML =footer();




let data = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
];
let data2 = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "District of Columbia",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
];
let countrys = (data) => {
  let country = document.getElementById("country");
  country.innerHTML = null;
  for (let i = 0; i < 16; i++) {
    let p = document.createElement("p");
    p.innerText = data[i];
    country.append(p);
  }
  let buti = document.getElementById("country");
  let but = document.createElement("button");
  but.setAttribute("id", "see_more");
  but.innerText = "See all states";
  buti.append(but);
  let button = document.getElementById("see_more");
  button.addEventListener("click", SeeMore);
};
countrys(data);

let button = document.getElementById("see_more");
button.addEventListener("click", SeeMore);

function SeeMore() {
  console.log("inside country");
  let button = document.getElementById("see_more");
  button.innerText = null;
  let country = document.getElementById("country");
  country.innerHTML = null;
  for (let i = 0; i < data.length; i++) {
    let p2 = document.createElement("p");
    p2.innerText = data[i];
    country.append(p2);
  }

  let buti = document.getElementById("country");
  let butn = document.createElement("button");
  butn.setAttribute("id", "see_less");
  butn.innerText = "See fever states";
  buti.append(butn);

  let show_less = document.getElementById("see_less");
  show_less.addEventListener("click", function () {
    countrys(data);
  });
}

// ------------next section state salary--------------
let state = (data2) => {
  let state = document.getElementById("state");
  state.innerHTML = null;
  for (let i = 0; i < 16; i++) {
    let p = document.createElement("p");
    p.innerText = data[i];
    state.append(p);
  }
  let buti = document.getElementById("state");
  let but = document.createElement("button");
  but.setAttribute("id", "see_more2");
  but.innerText = "See all states";
  buti.append(but);
  let button = document.getElementById("see_more2");
  button.addEventListener("click", SeeMores);
};
state(data2);

let button2 = document.getElementById("see_more2");
button2.addEventListener("click", SeeMores);

function SeeMores() {
  let button = document.getElementById("see_more2");
  button.innerText = null;
  let country = document.getElementById("state");
  country.innerHTML = null;
  for (let i = 0; i < data2.length; i++) {
    let p2 = document.createElement("p");
    p2.innerText = data2[i];
    country.append(p2);
  }

  let buti = document.getElementById("state");
  let butn = document.createElement("button");
  butn.setAttribute("id", "see_less2");
  butn.innerText = "See fewer states";
  buti.append(butn);

  let show_less = document.getElementById("see_less2");
  show_less.addEventListener("click", function () {
    state(data2);
  });
}
// ----------------------link section--------------------------
let calculator = document.getElementById("cal1");
calculator.addEventListener("click", function () {
  window.location.href = "salary_cal.html";
});
