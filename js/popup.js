  var link = document.querySelector(".button-search-form");
  var popup = document.querySelector(".search-form-block");
  
  var form = popup.querySelector("form");
  var adult = popup.querySelector("[name=adult]");
  var children = popup.querySelector("[name=children]");

  var storage = localStorage.getItem("adult");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("show-form-block-show");
  });


  form.addEventListener("submit", function(event) {
    if (!adult.value || !children.value) {
      event.preventDefault();
      console.log("Нужно ввести кол-во взрослых и детей"); 
    } else {
      localStorage.setItem("adult", adult.value);
    }
  });

