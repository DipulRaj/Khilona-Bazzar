
  const searchInput = document.getElementById("find");
  searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      alert("You searched for: " + searchInput.value);
    }
  });

  const subscribeBtn = document.querySelector("#signUpSubscribe button");
  const emailInput = document.getElementById("signUpEmail");

  subscribeBtn.addEventListener("click", function () {
    if (emailInput.value.trim() === "") {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing, " + emailInput.value + "!");
      emailInput.value = "";
    }
  });

  const cartButtons = document.querySelectorAll(".item-add-cart button");

  cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const itemName = this.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
      alert(itemName + " has been added to your cart.");
    });
  });
