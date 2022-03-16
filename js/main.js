const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".mobile__nav");
const mobileLogo = document.querySelector(".mobile__logo");
const logo = document.querySelector(".header__logo");
// Ativa o Menu Mobile
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
  if (logo.style.display === "none") {
    logo.style.display = "block";
  } else {
    logo.style.display = "none";
  }
};
menu.addEventListener("click", mobileMenu);
menuLinks.addEventListener("click", () => {
  menu.classList.remove("is-active");
  menuLinks.classList.remove("active");
  mobileLogo.classList.remove("mobile__logo");
});
//Trocar de página de forma dinâmica
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) =>
      tabContent.classList.remove("selected-page")
    );
    tabs.forEach((tab) => tab.classList.remove("selected"));
    target.classList.add("selected-page");
    tab.classList.add("selected");
  });
});
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
//Mensagem de erro do formulário
function validate() {
  // get all the inputs that have the validate class in it
  // this requires the input to have a class name valled validate
  var validateElements = document.getElementsByClassName("validate");

  // Get all the inputs
  // This code is required because the output
  // from 'document.getElementsByClassName' is not fit to the current needs

  // console.log("validateElements",validateElements);
  // Uncomment the previous line to see the output of the
  // 'document.getElementsByClassName' function

  var inputs = Array.prototype.filter.call(
    validateElements,
    function (element) {
      return element.nodeName === "INPUT";
    }
  );

  // Loop through the inputs to be validated

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.value.length == 0) {
      // error class
      input.classList.add("error");
      // The following is required if you want the validation to stop
      // once an invalid input is found
      // focus on the input [ optional ]
      input.focus();
      // break the loop [ optional ]
      // break;
    }
  }
}
