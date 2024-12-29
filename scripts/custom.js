$("document").ready(function () {
  // const chevronBtn = $(".js-chevronBtn");
  // const shopLearn = $(".js-shopLearn");
  // shopLearn.hide();
  // chevronBtn.on("click", () => {
  //   shopLearn.toggle(500);
  //   if (chevronBtn.hasClass("bi-chevron-down")) {
  //     chevronBtn.removeClass("bi-chevron-down");
  //     chevronBtn.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn.removeClass("bi-chevron-up");
  //     chevronBtn.addClass("bi-chevron-down");
  //   }
  // });
  // const chevronBtn1 = $(".js-chevronBtn1");
  // const appleWallet = $(".js-appleWallet");
  // appleWallet.hide();
  // chevronBtn1.on("click", () => {
  //   appleWallet.toggle(500);
  //   if (chevronBtn1.hasClass("bi-chevron-down")) {
  //     chevronBtn1.removeClass("bi-chevron-down");
  //     chevronBtn1.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn1.removeClass("bi-chevron-up");
  //     chevronBtn1.addClass("bi-chevron-down");
  //   }
  // });
  // const chevronBtn2 = $(".js-chevronBtn2");
  // const account = $(".js-account");
  // account.hide();
  // chevronBtn2.on("click", () => {
  //   account.toggle(500);
  //   if (chevronBtn2.hasClass("bi-chevron-down")) {
  //     chevronBtn2.removeClass("bi-chevron-down");
  //     chevronBtn2.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn2.removeClass("bi-chevron-up");
  //     chevronBtn2.addClass("bi-chevron-down");
  //   }
  // });
  // const chevronBtn3 = $(".js-chevronBtn3");
  // const entertaiment = $(".js-entertaiment");
  // entertaiment.hide();
  // chevronBtn3.on("click", () => {
  //   entertaiment.toggle(500);
  //   if (chevronBtn3.hasClass("bi-chevron-down")) {
  //     chevronBtn3.removeClass("bi-chevron-down");
  //     chevronBtn3.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn3.removeClass("bi-chevron-up");
  //     chevronBtn3.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn4 = $(".js-chevronBtn4");
  // const appleStore = $(".js-appleStore");
  // appleStore.hide();
  // chevronBtn4.on("click", () => {
  //   appleStore.toggle(500);
  //   if (chevronBtn4.hasClass("bi-chevron-down")) {
  //     chevronBtn4.removeClass("bi-chevron-down");
  //     chevronBtn4.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn4.removeClass("bi-chevron-up");
  //     chevronBtn4.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn5 = $(".js-chevronBtn5");
  // const forBusiness = $(".js-forbBusiness");
  // forBusiness.hide();
  // chevronBtn5.on("click", () => {
  //   forBusiness.toggle(500);
  //   if (chevronBtn5.hasClass("bi-chevron-down")) {
  //     chevronBtn5.removeClass("bi-chevron-down");
  //     chevronBtn5.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn5.removeClass("bi-chevron-up");
  //     chevronBtn5.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn6 = $(".js-chevronBtn6");
  // const forEducation = $(".js-forEducation");
  // forEducation.hide();
  // chevronBtn6.on("click", () => {
  //   forEducation.toggle(500);
  //   if (chevronBtn6.hasClass("bi-chevron-down")) {
  //     chevronBtn6.removeClass("bi-chevron-down");
  //     chevronBtn6.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn6.removeClass("bi-chevron-up");
  //     chevronBtn6.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn7 = $(".js-chevronBtn7");
  // const forHealth = $(".js-forHealth");
  // forHealth.hide();
  // chevronBtn7.on("click", () => {
  //   forHealth.toggle(500);
  //   if (chevronBtn7.hasClass("bi-chevron-down")) {
  //     chevronBtn7.removeClass("bi-chevron-down");
  //     chevronBtn7.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn7.removeClass("bi-chevron-up");
  //     chevronBtn7.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn8 = $(".js-chevronBtn8");
  // const forGovernment = $(".js-forGovernment");
  // forGovernment.hide();
  // chevronBtn8.on("click", () => {
  //   forGovernment.toggle(500);
  //   if (chevronBtn8.hasClass("bi-chevron-down")) {
  //     chevronBtn8.removeClass("bi-chevron-down");
  //     chevronBtn8.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn8.removeClass("bi-chevron-up");
  //     chevronBtn8.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn9 = $(".js-chevronBtn9");
  // const applevalue = $(".js-appleValues");
  // applevalue.hide();
  // chevronBtn9.on("click", () => {
  //   applevalue.toggle(500);
  //   if (chevronBtn9.hasClass("bi-chevron-down")) {
  //     chevronBtn9.removeClass("bi-chevron-down");
  //     chevronBtn9.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn9.removeClass("bi-chevron-up");
  //     chevronBtn9.addClass("bi-chevron-down");
  //   }
  // });

  // const chevronBtn10 = $(".js-chevronBtn10");
  // const aboutApple = $(".js-aboutApple");
  // aboutApple.hide();
  // chevronBtn10.on("click", () => {
  //   aboutApple.toggle(500);
  //   if (chevronBtn10.hasClass("bi-chevron-down")) {
  //     chevronBtn10.removeClass("bi-chevron-down");
  //     chevronBtn10.addClass("bi-chevron-up");
  //   } else {
  //     chevronBtn10.removeClass("bi-chevron-up");
  //     chevronBtn10.addClass("bi-chevron-down");
  //   }
  // });
  function footerToggle(chevronBtn, toggleContent) {
    let chevronButton = $(chevronBtn);
    let toggleContentelement = $(toggleContent);
    toggleContentelement.hide();

    chevronButton.on("click", () => {
      toggleContentelement.toggle(500);
      if (chevronButton.hasClass("bi-chevron-down")) {
        chevronButton.removeClass("bi-chevron-down");
        chevronButton.addClass("bi-chevron-up");
      } else {
        chevronButton.removeClass("bi-chevron-up");
        chevronButton.addClass("bi-chevron-down");
      }
    });
  }

  footerToggle(".js-chevronBtn", ".js-shopLearn");
  footerToggle(".js-chevronBtn1", ".js-appleWallet");
  footerToggle(".js-chevronBtn2", ".js-account");
  footerToggle(".js-chevronBtn3", ".js-entertaiment");
  footerToggle(".js-chevronBtn4", ".js-appleStore");
  footerToggle(".js-chevronBtn5", ".js-forbBusiness");
  footerToggle(".js-chevronBtn6", ".js-forEducation");
  footerToggle(".js-chevronBtn7", ".js-forHealth");
  footerToggle(".js-chevronBtn8", ".js-forGovernment");
  footerToggle(".js-chevronBtn9", ".js-appleValues");
  footerToggle(".js-chevronBtn10", ".js-aboutApple");
});

// function newFunc() {
//   const plusElement = document.querySelector(".js-plus-btn");
//   if (plusElement.classList.contains("bi-chevron-down")) {
//     plusElement.classList.remove("bi-chevron-down");
//     plusElement.classList.add("bi-chevron-up");
//   } else {
//     plusElement.classList.remove("bi-chevron-up");
//     plusElement.classList.add("bi-chevron-down");
//   }
// }
