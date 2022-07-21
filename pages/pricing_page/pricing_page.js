document.getElementById('i4_flex_right_container').addEventListener('click', function() {
    let element = document.getElementsByClassName("i4v2_flex_container")[0];
    element.classList.toggle("show-inner");
    // if(element.classList.contains("show-inner")) element.classList.remove("show-inner");
    // else element.classList.add("show-inner");
    element = document.getElementById("i4_flex_right_container")
    if(element.children[0].textContent == 'See plan details') {
        element.children[0].textContent = 'Hide plan details';
    }
    else {
        element.children[0].textContent = 'See plan details';
    }
});