$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip({
    html: true,
    delay: { hide: 500 },
  });

  for (let i = 1; i < 10; i++) {
    document.getElementById('inner-flex-h5-' + i).addEventListener('click', function () {
      $('#inner-flex-container-' + i).slideToggle();
      if ($(`#inner-flex-h5-${i} img`)[0].src == 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADm5ubp6elMTExSUlJPT09KSkpUVFRGRkbk5OTr6+sjIyPu7u5HR0d7e3sSEhLd3d3ExMRiYmJBQUE1NTX29vatra1ra2uGhoYYGBgLCwuhoaFcXFyTk5PIyMi3t7cFc7HNAAADxElEQVR4nO3d61LiQBAF4EEEVxFEEIWVVd//KbfaVAhhMp3JZC7dqfP9xGxtus6kD7KWawwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLx/HDeHzfHjvfSNpHKa1U6lbyWJ1d9Z43ld+nbiu5u13ZW+odjms1vz0rcU122Ckxuxa8BJjWgf0YmN2J3ghNaNK0GyKn1zMbgTnEiKK3bACaTIJziBFLlnsKZ6o/YnqDxFvwEVj+g7oNqD6j+g0hR9lkxDYWkMSVBlisMSJMqexaEJqksxZEBVKYYNqCjF0AHVpMgO+Mcs1I/YM6DhR1RwUNmaWP5ecq86xd4EieYU2QTvL5c9qE3RK0GiNUV2wGXrUp3PoneCRGOK7IAL6/KluhEHDtgzosCDOuiIVnQdVI+it2laNwEJEj0peha9TUv1ByZIdKQ4oOhtGp7FEQkS+SkO7sFb0qt/9IDSq3/kEa1IPqhBRW+Tu26iJEikphhc9DaZ1R8tQSIxxVFFb5P3LEZNkEhLMUIP3pJV/QkGlFX90Y9oRc5BjVT0NinrJlGCREaKEYveJqH6EyZIyqcYuehtpZ/FxAmSsikm6cFbJas/y4Alqz/DEa2UOqjJit5WZt1kS5CUSDFp0ds22VPMtGQauTcqO2D8BEneZzF7giRnisnfqnXLN2KhAfNVf5EjWsmTYuaaaMuxbgomSNKnyCa4ifE39HhMnGKxJdNIm2KBorel/OxGQIIkXYpCBuzZqCNGFDNgqtIQNGCag1q06G3x142oBEnsFNkEH+Pfv4e41S8uQRJzo7IDPqS5fw/xPrsRmSCJlaKIt2rd2I3qPaLgAeOUhtgjWhl/UNmaKLdkGmPXjfAEybgUBRa9bUz1i14yjfAU2QFzfCbjK/RZVJIgCUtR6Fu1biHVr2rAkO/6n7g/IeuIVoYeVGUJkmHrhk1QRtHb2BSf2teyCUopehtb/a2DqjJB4psiO6DMZ7DGPouXFNUmSHxSVPROpotH9X+qHpAf8ZMueGEukH5EK9xBfTFmzXxZ9pJpcOtmbc7aEyRMimfzz/k1uUVvc1f/3mz1J0ic/2zzbFxf0fIM1pwb1ZWhhppoc6S4dfwsrr4BXetmab6mMqBjxC/z2jm3Tl0H9bXrR8a1LZmGvW7oB+ytXwuvNUFipfj7/9ns2q9pKnrbTfXvqle/r187lr3D0Y7Xw3zXr6729Uvbn4I3F8fP5bvB/fWv0J6f92+HxWlX7L5i2p2Wh7f9WeGvCAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAw5j9EWyN3oiEu+wAAAABJRU5ErkJggg==') 
      {
        $(`#inner-flex-h5-${i} img`)[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADm5uZOTk7q6upQUFDl5eVKSkpSUlJLS0tGRkZhYWFBQUE1NTXs7OwZGRkmJiadnZ2CgoLFxcURERG3t7cLCwtqamrCwsJWVlba2tqPj4+WlpZeXl6lpaV1dXUU3MJPAAAD+UlEQVR4nO3d61LjMAwF4ARaChQobZfL3uD933IrQjZJ7aixY1tS5nw/0zITzZEtN9ChqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMWu23D4/rw1H6PpI4HtaPD9v9qndpta2//XgRu69UXl7bYrZP7bVj3fMmeXcJbPvFfPfkez1wL3uHM90Pi3mna6v6zFr6LmdYnxdDjXp9frHeSN9ntI1Ty8+q+uVcrOtr6TuN5IZV1zfVb8/V+k76XqPc+Ur54wnWaoneAk9t+uq9brBRfS16sqv81+1tN/5ePKl2Y6/YStEZE12Gf8deMjX670er2FYfo68ZSnFkDZIP90jTY2Utjq7B+utQ88m8bGNo+MdE40BvYF43kSKX4O7rHTe2S+QKrK+a97Alam9UrkVPh9JvV3ZTnJIgYVPUPDSYMdFLkHAzQ/HoHx/0J6vhe9lG1boW2TV4df5ugymGJEjMpRiWIGFT1LejsruoJ0FiKsXwBAlboq6hwY6J0QINNWpMizaMpBibIDExNELHxJCBFOckSNSvxfg12FKe4twECZui9Fxk5+CkBIni0R836F1siZK/X0zRog2lKc7fZDrsp36pFNMlSBQOjXmD3qUuxbQJEmVDI+UabKlKcfTXZ9EJEkWnG7ZFIxMkakpMvwZbSkZ/nhZtqBj9ac6iY9jt5jbF/V+UM0EiPvpzjIkh4RRzJ0jYFHPvqHnXYEswxRIJErGhkWvQu4RKzDfoXWyJuRq1VIs2BA5wZTaZTvHtpmyCpPDnxfyD3lU0xdviCZKCo7/cmBgqlqJMgqTQXGQ3mYwJkiIllt9F+wqMfrkWbWQf/VKbTCfzdiOdIMn6qV9i0LsypqghQZLtACe/BluZHvhrSZBk2VElB70rQ4myg96V/HSjqUUbiR/469lkOkmHhr4EScLRr2PQu5KlqDNBkmj0l36qFiLJt220jYmhBDuqxl20b3aJJR/dx5l5utHdoo1ZX+7TOiaGZnzSsJAgif4L/9R/jJdPZIpWEiRRBzgba7AVsaPqHxNDwTuq5qOaX2CJU7+FrUnQ6SbV1wrKCkjR1ibTmZyitU2mM3H02xn0rklDw9Kgd0341G9vTAxdfI6q95nMVGyKt3yBBhIkbIksIwVeaFSGiRZtxKVoJkESk6KhBEl4iqYSJKEpGkuQhKVoLkESkqLBBMn0FE0mSKamaDRBMq1EwwVOa1SzLdq4nKLpBMmlFI0nSPgUzSdIuBQXkCAZT3ERCZKxFBeSIPGXuJgEia/ERRXoK3FBLdo4324WliB5eu7V9/x0+QcM2v8vcC99K9m8vG0eN5/2/2sWAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD7/AD33Iwpcu22+AAAAAElFTkSuQmCC';
      }
      else 
      {
      ($(`#inner-flex-h5-${i} img`)[0].src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADm5ubp6elMTExSUlJPT09KSkpUVFRGRkbk5OTr6+sjIyPu7u5HR0d7e3sSEhLd3d3ExMRiYmJBQUE1NTX29vatra1ra2uGhoYYGBgLCwuhoaFcXFyTk5PIyMi3t7cFc7HNAAADxElEQVR4nO3d61LiQBAF4EEEVxFEEIWVVd//KbfaVAhhMp3JZC7dqfP9xGxtus6kD7KWawwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLx/HDeHzfHjvfSNpHKa1U6lbyWJ1d9Z43ld+nbiu5u13ZW+odjms1vz0rcU122Ckxuxa8BJjWgf0YmN2J3ghNaNK0GyKn1zMbgTnEiKK3bACaTIJziBFLlnsKZ6o/YnqDxFvwEVj+g7oNqD6j+g0hR9lkxDYWkMSVBlisMSJMqexaEJqksxZEBVKYYNqCjF0AHVpMgO+Mcs1I/YM6DhR1RwUNmaWP5ecq86xd4EieYU2QTvL5c9qE3RK0GiNUV2wGXrUp3PoneCRGOK7IAL6/KluhEHDtgzosCDOuiIVnQdVI+it2laNwEJEj0peha9TUv1ByZIdKQ4oOhtGp7FEQkS+SkO7sFb0qt/9IDSq3/kEa1IPqhBRW+Tu26iJEikphhc9DaZ1R8tQSIxxVFFb5P3LEZNkEhLMUIP3pJV/QkGlFX90Y9oRc5BjVT0NinrJlGCREaKEYveJqH6EyZIyqcYuehtpZ/FxAmSsikm6cFbJas/y4Alqz/DEa2UOqjJit5WZt1kS5CUSDFp0ds22VPMtGQauTcqO2D8BEneZzF7giRnisnfqnXLN2KhAfNVf5EjWsmTYuaaaMuxbgomSNKnyCa4ifE39HhMnGKxJdNIm2KBorel/OxGQIIkXYpCBuzZqCNGFDNgqtIQNGCag1q06G3x142oBEnsFNkEH+Pfv4e41S8uQRJzo7IDPqS5fw/xPrsRmSCJlaKIt2rd2I3qPaLgAeOUhtgjWhl/UNmaKLdkGmPXjfAEybgUBRa9bUz1i14yjfAU2QFzfCbjK/RZVJIgCUtR6Fu1biHVr2rAkO/6n7g/IeuIVoYeVGUJkmHrhk1QRtHb2BSf2teyCUopehtb/a2DqjJB4psiO6DMZ7DGPouXFNUmSHxSVPROpotH9X+qHpAf8ZMueGEukH5EK9xBfTFmzXxZ9pJpcOtmbc7aEyRMimfzz/k1uUVvc1f/3mz1J0ic/2zzbFxf0fIM1pwb1ZWhhppoc6S4dfwsrr4BXetmab6mMqBjxC/z2jm3Tl0H9bXrR8a1LZmGvW7oB+ytXwuvNUFipfj7/9ns2q9pKnrbTfXvqle/r187lr3D0Y7Xw3zXr6729Uvbn4I3F8fP5bvB/fWv0J6f92+HxWlX7L5i2p2Wh7f9WeGvCAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAw5j9EWyN3oiEu+wAAAABJRU5ErkJggg==') 

      }
    });
}
});

let grey_bg = document.getElementById("grey_bg");

document
  .getElementById("i4_flex_right_container")
  .addEventListener("click", function () {
    let element = document.getElementsByClassName("i4v2_flex_container")[0];
    let mini = document.getElementsByClassName("i4_flex_container");
    console.log("mini: ", mini);
    console.log("mini[0] :", mini[0]);
    element = document.getElementById("i4_flex_right_container");
    if (element.children[0].textContent == "See plan details") {
      element.children[0].textContent = "Hide plan details";
      grey_bg.style.height = "800px";
      mini[0].classList.toggle("i4_remove_from_mini");
      element.children[1].src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADm5ubp6elMTExSUlJPT09KSkpUVFRGRkbk5OTr6+sjIyPu7u5HR0d7e3sSEhLd3d3ExMRiYmJBQUE1NTX29vatra1ra2uGhoYYGBgLCwuhoaFcXFyTk5PIyMi3t7cFc7HNAAADxElEQVR4nO3d61LiQBAF4EEEVxFEEIWVVd//KbfaVAhhMp3JZC7dqfP9xGxtus6kD7KWawwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOLx/HDeHzfHjvfSNpHKa1U6lbyWJ1d9Z43ld+nbiu5u13ZW+odjms1vz0rcU122Ckxuxa8BJjWgf0YmN2J3ghNaNK0GyKn1zMbgTnEiKK3bACaTIJziBFLlnsKZ6o/YnqDxFvwEVj+g7oNqD6j+g0hR9lkxDYWkMSVBlisMSJMqexaEJqksxZEBVKYYNqCjF0AHVpMgO+Mcs1I/YM6DhR1RwUNmaWP5ecq86xd4EieYU2QTvL5c9qE3RK0GiNUV2wGXrUp3PoneCRGOK7IAL6/KluhEHDtgzosCDOuiIVnQdVI+it2laNwEJEj0peha9TUv1ByZIdKQ4oOhtGp7FEQkS+SkO7sFb0qt/9IDSq3/kEa1IPqhBRW+Tu26iJEikphhc9DaZ1R8tQSIxxVFFb5P3LEZNkEhLMUIP3pJV/QkGlFX90Y9oRc5BjVT0NinrJlGCREaKEYveJqH6EyZIyqcYuehtpZ/FxAmSsikm6cFbJas/y4Alqz/DEa2UOqjJit5WZt1kS5CUSDFp0ds22VPMtGQauTcqO2D8BEneZzF7giRnisnfqnXLN2KhAfNVf5EjWsmTYuaaaMuxbgomSNKnyCa4ifE39HhMnGKxJdNIm2KBorel/OxGQIIkXYpCBuzZqCNGFDNgqtIQNGCag1q06G3x142oBEnsFNkEH+Pfv4e41S8uQRJzo7IDPqS5fw/xPrsRmSCJlaKIt2rd2I3qPaLgAeOUhtgjWhl/UNmaKLdkGmPXjfAEybgUBRa9bUz1i14yjfAU2QFzfCbjK/RZVJIgCUtR6Fu1biHVr2rAkO/6n7g/IeuIVoYeVGUJkmHrhk1QRtHb2BSf2teyCUopehtb/a2DqjJB4psiO6DMZ7DGPouXFNUmSHxSVPROpotH9X+qHpAf8ZMueGEukH5EK9xBfTFmzXxZ9pJpcOtmbc7aEyRMimfzz/k1uUVvc1f/3mz1J0ic/2zzbFxf0fIM1pwb1ZWhhppoc6S4dfwsrr4BXetmab6mMqBjxC/z2jm3Tl0H9bXrR8a1LZmGvW7oB+ytXwuvNUFipfj7/9ns2q9pKnrbTfXvqle/r187lr3D0Y7Xw3zXr6729Uvbn4I3F8fP5bvB/fWv0J6f92+HxWlX7L5i2p2Wh7f9WeGvCAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAw5j9EWyN3oiEu+wAAAABJRU5ErkJggg==";
    } else {
      element.children[0].textContent = "See plan details";
      // grey_bg.style.height = "310px";

      element.children[1].src =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADm5uZOTk7q6upQUFDl5eVKSkpSUlJLS0tGRkZhYWFBQUE1NTXs7OwZGRkmJiadnZ2CgoLFxcURERG3t7cLCwtqamrCwsJWVlba2tqPj4+WlpZeXl6lpaV1dXUU3MJPAAAD+UlEQVR4nO3d61LjMAwF4ARaChQobZfL3uD933IrQjZJ7aixY1tS5nw/0zITzZEtN9ChqgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMWu23D4/rw1H6PpI4HtaPD9v9qndpta2//XgRu69UXl7bYrZP7bVj3fMmeXcJbPvFfPfkez1wL3uHM90Pi3mna6v6zFr6LmdYnxdDjXp9frHeSN9ntI1Ty8+q+uVcrOtr6TuN5IZV1zfVb8/V+k76XqPc+Ur54wnWaoneAk9t+uq9brBRfS16sqv81+1tN/5ePKl2Y6/YStEZE12Gf8deMjX670er2FYfo68ZSnFkDZIP90jTY2Utjq7B+utQ88m8bGNo+MdE40BvYF43kSKX4O7rHTe2S+QKrK+a97Alam9UrkVPh9JvV3ZTnJIgYVPUPDSYMdFLkHAzQ/HoHx/0J6vhe9lG1boW2TV4df5ugymGJEjMpRiWIGFT1LejsruoJ0FiKsXwBAlboq6hwY6J0QINNWpMizaMpBibIDExNELHxJCBFOckSNSvxfg12FKe4twECZui9Fxk5+CkBIni0R836F1siZK/X0zRog2lKc7fZDrsp36pFNMlSBQOjXmD3qUuxbQJEmVDI+UabKlKcfTXZ9EJEkWnG7ZFIxMkakpMvwZbSkZ/nhZtqBj9ac6iY9jt5jbF/V+UM0EiPvpzjIkh4RRzJ0jYFHPvqHnXYEswxRIJErGhkWvQu4RKzDfoXWyJuRq1VIs2BA5wZTaZTvHtpmyCpPDnxfyD3lU0xdviCZKCo7/cmBgqlqJMgqTQXGQ3mYwJkiIllt9F+wqMfrkWbWQf/VKbTCfzdiOdIMn6qV9i0LsypqghQZLtACe/BluZHvhrSZBk2VElB70rQ4myg96V/HSjqUUbiR/469lkOkmHhr4EScLRr2PQu5KlqDNBkmj0l36qFiLJt220jYmhBDuqxl20b3aJJR/dx5l5utHdoo1ZX+7TOiaGZnzSsJAgif4L/9R/jJdPZIpWEiRRBzgba7AVsaPqHxNDwTuq5qOaX2CJU7+FrUnQ6SbV1wrKCkjR1ibTmZyitU2mM3H02xn0rklDw9Kgd0341G9vTAxdfI6q95nMVGyKt3yBBhIkbIksIwVeaFSGiRZtxKVoJkESk6KhBEl4iqYSJKEpGkuQhKVoLkESkqLBBMn0FE0mSKamaDRBMq1EwwVOa1SzLdq4nKLpBMmlFI0nSPgUzSdIuBQXkCAZT3ERCZKxFBeSIPGXuJgEia/ERRXoK3FBLdo4324WliB5eu7V9/x0+QcM2v8vcC99K9m8vG0eN5/2/2sWAAAAAAAAAAAAAAAAAAAAAAAAAAAAQD7/AD33Iwpcu22+AAAAAElFTkSuQmCC";
    }
    $(".i4v2_flex_container").slideToggle("medium", function () {
      if (element.children[0].textContent == "See plan details") {
        mini[0].classList.toggle("i4_remove_from_mini");
        grey_bg.style.height = "310px";
      }
    });
  });

let trigger_text_content = document.getElementsByClassName("i1_btn_trigger")[0];
let mega_height = document.getElementsByClassName("i1_mega_container ")[0];
// let full_i1_flex = document.getElementsByClassName('i1_mini_triple_flex');

if (trigger_text_content.textContent == "See plan details") {
  // $('.i1_mini_triple_flex_part2').slideToggle("medium", function() {});

  let part2 = document.getElementsByClassName("i1_mini_triple_flex_part2");
  part2[0].classList.add("display_none");
  part2[1].classList.add("display_none");
  part2[2].classList.add("display_none");
}

document
  .getElementsByClassName("i1_div_btn_trigger")[0]
  .addEventListener("click", function () {
    // console.log('clicked');
    let trigger_text_content =
      document.getElementsByClassName("i1_btn_trigger")[0];
    let full_i1_flex = document.getElementsByClassName("i1_mini_triple_flex");
    // console.log(full_i1_flex);
    if (trigger_text_content.textContent == "See plan details") {
      trigger_text_content.textContent = "Hide plan details";
      full_i1_flex[0].classList.toggle("i1_remove_mini_flex");
      full_i1_flex[1].classList.toggle("i1_remove_mini_flex");
      full_i1_flex[2].classList.toggle("i1_remove_mini_flex");
      
    } else {
      trigger_text_content.textContent = "See plan details";
      window.scrollTo({
        top: 120,
        behavior: 'smooth'
      });
    }
    $(".i1_mini_triple_flex_part2").slideToggle("slow", function () {
      if (trigger_text_content.textContent == "See plan details") {
        full_i1_flex[0].classList.toggle("i1_remove_mini_flex");
        full_i1_flex[1].classList.toggle("i1_remove_mini_flex");
        full_i1_flex[2].classList.toggle("i1_remove_mini_flex");
      }
    });
  });




