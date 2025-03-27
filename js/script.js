

/// get code
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const getOtpBtn = document.getElementById("getOtpBtn");
  const errorMessage = document.getElementById("error-message");

  emailInput.addEventListener("input", function () {
    if (validateEmail(emailInput.value)) {
      getOtpBtn.classList.add("active");
      getOtpBtn.disabled = false;
      errorMessage.textContent = "";
    } else {
      getOtpBtn.classList.remove("active");
      getOtpBtn.disabled = true;
    }
  });

  getOtpBtn.addEventListener("click", function () {
    if (!validateEmail(emailInput.value)) {
      errorMessage.textContent = "Please enter a valid email.";
      return;
    }
    alert("OTP sent to " + emailInput.value);
  });

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
});

////checkout
document.addEventListener("DOMContentLoaded", function () {
  const selectShippingBtn = document.getElementById("select-shipping");
  const shippingModal = document.getElementById("shipping-modal");
  const closeModal = document.querySelector(".close-modal");
  const applyShippingBtn = document.getElementById("apply-shipping");
  const shippingCostEl = document.getElementById("shipping-cost");
  const totalCostEl = document.getElementById("total-cost");

  let subtotal = 225000; // Initial subtotal

  // Open shipping modal
  selectShippingBtn.addEventListener("click", () => {
    shippingModal.style.display = "flex";
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    shippingModal.style.display = "none";
  });

  // Apply selected shipping
  applyShippingBtn.addEventListener("click", () => {
    let selectedShipping = document.querySelector(
      'input[name="shipping"]:checked'
    );

    if (selectedShipping) {
      let shippingCost = parseInt(selectedShipping.value);
      let totalCost = subtotal + shippingCost;

      shippingCostEl.innerHTML = `<strong>Shipping:</strong> ₦${shippingCost.toLocaleString()}`;
      totalCostEl.textContent = `₦${totalCost.toLocaleString()}`;

      shippingModal.style.display = "none"; // Close modal
    } else {
      alert("Please select a shipping method.");
    }
  });

  // Close modal when clicking outside content
  window.onclick = function (event) {
    if (event.target === shippingModal) {
      shippingModal.style.display = "none";
    }
  };
});

/////category
document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".categories li");
  const sections = document.querySelectorAll(".shopping-section");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Remove 'active' class from all categories
      categories.forEach((cat) => cat.classList.remove("active"));
      this.classList.add("active");

      const categoryText = this.textContent.trim();

      // Show or hide sections based on category selection
      sections.forEach((section) => {
        if (categoryText === "All") {
          section.style.display = "block";
        } else {
          if (section.getAttribute("data-category") === categoryText) {
            section.style.display = "block";
          } else {
            section.style.display = "none";
          }
        }
      });
    });
  });
});

////select option
// Get all "Select options" buttons
const addToCartButtons = document.querySelectorAll(".select-option");

// Get modal elements
const modal = document.querySelector(".product-modal");
const modalImage = modal.querySelector(".main-image img");
const modalThumbnails = modal.querySelector(".thumbnails");
const modalTitle = modal.querySelector(".modal-right h2");
const modalPrice = modal.querySelector(".modal-right .price");
const modalTag = modal.querySelector(".modal-right .tag span");

// Function to open the modal and update content
function showProductModal(event) {
  const productCard = event.target.closest(".product-card"); // Get the clicked product card

  // Extract product details from the clicked card
  const productImage = productCard.querySelector("img").src;
  const productTitle = productCard.querySelector("h3").textContent;
  const productPrice = productCard.querySelector(".price").textContent;

  // Update modal content
  modalImage.src = productImage;
  modalTitle.textContent = productTitle;
  modalPrice.textContent = productPrice;
  modalTag.textContent = productTitle; // Use product name as tag

  // Generate thumbnails (for demo, using the same image)
  // modalThumbnails.innerHTML = `
  //       <img src="${productImage}" alt="Thumbnail 1">
  //       <img src="${productImage}" alt="Thumbnail 2">
  //       <img src="${productImage}" alt="Thumbnail 3">
  //   `;

  // Show the modal
  modal.style.display = "block";
}

// Attach event listener to each "Select options" button
addToCartButtons.forEach((button) => {
  button.addEventListener("click", showProductModal);
});

// Function to hide modal
function hideSidebar() {
  modal.style.display = "none";
}

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    hideSidebar();
  }
});



/////add to cart buuton appear
document.getElementById("sizes").addEventListener("change", function () {
  let addToCartBtn = document.getElementById("addToCartBtn");
  if (this.value) {
    // If a size is selected
    addToCartBtn.style.display = "block";
  } else {
    addToCartBtn.style.display = "none";
  }
});


