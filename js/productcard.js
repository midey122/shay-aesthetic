// document.addEventListener("DOMContentLoaded", () => {
//   const cartBtn = document.getElementById("cart-btn");
//   const cartModal = document.getElementById("cart-modal");
//   const closeBtn = document.querySelector(".close-btn");
//   const clearCartBtn = document.getElementById("clear-cart");
//   const cartItemsContainer = document.getElementById("cart-items");
//   const addToCartBtn = document.getElementById("addToCartBtn");
//   const productModal = document.querySelector(".product-modal");
//   const productCards = document.querySelectorAll(".product-card");

//   let cart = [];

//   function updateCartUI() {
//     cartItemsContainer.innerHTML = "";
//     cart.forEach((item, index) => {
//       const itemDiv = document.createElement("div");
//       itemDiv.classList.add("cart-item");
//       itemDiv.innerHTML = `
//         <img src="${item.img}" alt="${item.name}">
//         <p>${item.name} - Package: ${item.package || "N/A"}</p>

//         <p>₦${item.price * item.quantity}</p>
//         <button onclick="removeItem(${index})">Remove</button>
//       `;
//       cartItemsContainer.appendChild(itemDiv);
//     });
//   }

//   window.changeQuantity = (index, change) => {
//     cart[index].quantity = Math.max(1, cart[index].quantity + change);
//     updateCartUI();
//   };

//   window.removeItem = (index) => {
//     cart.splice(index, 1);
//     updateCartUI();
//   };

//   function addToCart(
//     productName,
//     productPrice,
//     productImg,
//     selectedPackage = ""
//   ) {
//     const existingItem = cart.find(
//       (item) => item.name === productName && item.package === selectedPackage
//     );
//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({
//         name: productName,
//         price: productPrice,
//         img: productImg,
//         package: selectedPackage,
//         quantity: 1,
//       });
//     }
//     updateCartUI();
//   }

//   if (addToCartBtn) {
//     addToCartBtn.addEventListener("click", () => {
//       const productName =
//         productModal.querySelector(".modal-right h2").textContent;
//       const productPrice = parseInt(
//         productModal.querySelector(".price").textContent.replace("₦", "")
//       );
//       const productImg = productModal.querySelector(".main-image img").src;
//       const selectedPackage = document.getElementById("sizes").value;

//       if (selectedPackage === "Select package") {
//         alert("Please select a package.");
//         return;
//       }
//       addToCart(productName, productPrice, productImg, selectedPackage);
//     });
//   }

//   productCards.forEach((card) => {
//     const addToCartButton = card.querySelector(".add-to-cart");
//     if (addToCartButton) {
//       addToCartButton.addEventListener("click", () => {
//         const productName = card.querySelector("h3").textContent;
//         const productPrice = parseInt(
//           card.querySelector(".price").textContent.replace("₦", "")
//         );
//         const productImg = card.querySelector("img").src;
//         addToCart(productName, productPrice, productImg);
//       });
//     }
//   });

//   cartBtn.addEventListener("click", () => {
//     cartModal.style.display = "flex";
//     updateCartUI();
//   });

//   closeBtn.addEventListener("click", () => {
//     cartModal.style.display = "none";
//   });

//   clearCartBtn.addEventListener("click", () => {
//     cart = [];
//     updateCartUI();
//   });

//   document.getElementById("continue-shopping").addEventListener("click", () => {
//     cartModal.style.display = "none";
//   });

//   document.getElementById("checkout").addEventListener("click", () => {
//     alert("Proceeding to checkout...");
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const cartBtn = document.getElementById("cart-btn");
//   const cartModal = document.getElementById("cart-modal");
//   const closeBtn = document.querySelector(".close-btn");
//   const clearCartBtn = document.getElementById("clear-cart");
//   const cartItemsContainer = document.getElementById("cart-items");
//   const addToCartBtn = document.getElementById("addToCartBtn");
//   const productModal = document.querySelector(".product-modal");
//   const productCards = document.querySelectorAll(".product-card");

//   let cart = [];

//   function updateCartUI() {
//     cartItemsContainer.innerHTML = "";
//     let totalPrice = 0;

//     cart.forEach((item, index) => {
//       const itemDiv = document.createElement("div");
//       itemDiv.classList.add("cart-item");
//       itemDiv.innerHTML = `
//         <img src="${item.img}" alt="${item.name}">
//         <p>${item.name} - ${item.package}</p>
//         <p>₦${item.price * item.quantity}</p>
//         <button onclick="removeItem(${index})">Remove</button>
//       `;
//       cartItemsContainer.appendChild(itemDiv);
//       totalPrice += item.price * item.quantity;
//     });

//     document.getElementById("total-price").textContent = `₦${totalPrice}`;
//   }

//   window.removeItem = (index) => {
//     cart.splice(index, 1);
//     updateCartUI();
//   };

//   function addToCart(productName, packageOption, productImg) {
//     // Define package prices
//     const packagePrices = {
//       "1 piece": 5000, // Example price for 1 piece
//       "3 pieces": 14000, // Example price for 3 pieces
//       "6 pieces": 27000, // Example price for 6 pieces
//     };

//     const productPrice = packagePrices[packageOption];

//     if (!productPrice) {
//       alert("Invalid package selected.");
//       return;
//     }

//     const existingItem = cart.find(
//       (item) => item.name === productName && item.package === packageOption
//     );

//     if (existingItem) {
//       existingItem.quantity += 1;
//     } else {
//       cart.push({
//         name: productName,
//         price: productPrice,
//         img: productImg,
//         package: packageOption,
//         quantity: 1,
//       });
//     }

//     updateCartUI();
//   }

//   if (addToCartBtn) {
//     addToCartBtn.addEventListener("click", () => {
//       const productName =
//         productModal.querySelector(".modal-right h2").textContent;
//       const productImg = productModal.querySelector(".main-image img").src;
//       const selectedPackage = document.getElementById("sizes").value;

//       if (selectedPackage === "Select package") {
//         alert("Please select a package.");
//         return;
//       }

//       addToCart(productName, selectedPackage, productImg);
//     });
//   }

//   cartBtn.addEventListener("click", () => {
//     cartModal.style.display = "flex";
//     updateCartUI();
//   });

//   closeBtn.addEventListener("click", () => {
//     cartModal.style.display = "none";
//   });

//   clearCartBtn.addEventListener("click", () => {
//     cart = [];
//     updateCartUI();
//   });

//   document.getElementById("continue-shopping").addEventListener("click", () => {
//     cartModal.style.display = "none";
//   });

//   document.getElementById("checkout").addEventListener("click", () => {
//     alert("Proceeding to checkout...");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cart-btn");
  const cartModal = document.getElementById("cart-modal");
  const closeBtn = document.querySelector(".close-btn");
  const clearCartBtn = document.getElementById("clear-cart");
  const cartItemsContainer = document.getElementById("cart-items");
  const addToCartBtn = document.getElementById("addToCartBtn");
  const totalPriceElement = document.getElementById("total-price");
  const productModal = document.querySelector(".product-modal");

  let cart = [];

  // Product price data
  const productPrices = {
    "lip mask": {
      "1 piece": 5000,
      "3 pieces": 14000,
      "6 pieces": 27000,
    },
    "Sadoer mouth wash": {
      "1 piece": 500,
      "3 pieces": 19000,
      "6 pieces": 1800,
      "12 pieces": 3600,
      "20 pieces": 6000,
    },
    "Transparent  flower  claw clip": {
      "3 pieces": 4500,
      "6 pieces": 9000,
      "12 pieces": 18000,
    },
    "Storage cup": {
      "1 piece": 1000,
      "3 pieces": 2250,
      "6 pieces": 4500,
      "12 pieces": 9000,
    },
    "Mini hair straightner": {
      "1 piece": 3500,
      "3 pieces": 9000,
      "6 pieces": 18000,
      "10 pieces": 30000,
    },
    "Loofah  head band": {
      "1 piece": 3500,
      "3 pieces": 6900,
      "6 pieces": 13800,
    },
    "2in1 Face brush": {
      "1 piece": 3000,
      "3 pieces": 6000,
      "6 pieces": 12000,
      "12 pieces": 24000,
    },
    "Collagen sleeping mask": {
      "1 piece": 800,
      "5 pieces": 2500,
      "10 pieces": 5000,
      "20 pieces": 10000,
    },
    "Aesthetic  key holders": {
      "1 piece": 3000,
      "3 pieces": 6900,
      "5 pieces": 11500,
      "10 pieces": 23000,
    },
    "VICTORIA'S SPIRIT LIPGLOW OIL": {
      "1 piece": 2500,
      "3 pieces": 4500,
      "6 pieces": 9000,
      "12 pieces": 18000,
    },
    "Acne patch": {
      "1 piece": 3000,
      "3 pieces": 6000,
      "6 pieces": 12000,
      "12 pieces": 24000,
    },
    "Green tea mud mask": {
      "1 piece": 900,
      "6 piece": 3600,
      "10 pieces": 6000,
      "12 pieces": 7200,
    },
    "Vitamin c mud mask": {
      "1 piece": 900,
      "6 piece": 3600,
      "10 pieces": 6000,
      "12 pieces": 7200,
    },
    "Can wipes": {
      "1 piece": 2500,
      "3 piece": 5850,
      "6 piece": 11700,
      "12 piece": 23400,
    },
    "Compressed towels": {
      "1 piece": 2500,
      "3 pieces": 6000,
      "6 pieces": 12000,
    },
    "Acne patch ": {
      "1 piece": 3000,
      "3 pieces": 6000,
      "6 pieces": 12000,
      "12 pieces": 24000,
    },
    "Ushas  peel off  mask": {
      "1 piece": 2000,
      "3 pieces": 3000,
      "6 pieces": 6000,
      "12 pieces": 12000,
      "24 pieces": 24000,
    },
    "3in1 selfie stick with led": {
      "1 piece": 15000,
      "2 pieces": 20000,
    },
    "Ushas Lip serum": {
      "1 piece": 2000,
      "3 pieces": 3000,
      "6 pieces": 6000,
      "12 pieces": 12000,
      "24 pieces": 24000,
    },
    "Flower claw clip": {
      "1 piece": 2000,
      "3 pieces": 4500,
      "6 pieces": 9000,
      "12 pieces": 18000,
    },
    "black clip": {
      "1 piece": 1200,
      "3 pieces": 2700,
      "6 pieces": 5400,
      "12 pieces": 10800,
    },
    "Butterfly Claw clip": {
      "1 piece": 1500,
      "3 pieces": 2850,
      "6 pieces": 5700,
      "12 pieces": 10800,
    },
    "Transparent clip": {
      "1 piece": 1400,
      "3 pieces": 2700,
      "6 pieces": 5400,
      "12 pieces": 10800,
    },
    "Animal skin claw": {
      "1 piece": 1500,
      "3 pieces": 2850,
      "6 pieces": 5700,
      "12 pieces": 10800,
    },
    "Cute Barbie hair clip": {
      "1 piece": 2800,
      "3 pieces": 6600,
    },
    "Claw xl": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw Vicky": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw Nummy": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw L&A": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw meddi": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw loveth": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw Animal chic": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw luxey": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw rectal": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw zile": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
    "Claw xiggi ": {
      "1 piece": 3000,
      "3 pieces": 5850,
      "6 pieces": 11700,
      "12 pieces": 23400,
    },
  };

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <p>${item.name} - ${item.package}</p>
        <p>₦${item.price * item.quantity}</p>
        <button onclick="removeItem(${index})">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);
      totalPrice += item.price * item.quantity;
    });

    totalPriceElement.textContent = `₦${totalPrice}`;
  }

  window.removeItem = (index) => {
    cart.splice(index, 1);
    updateCartUI();
  };

  function addToCart(productName, packageOption, productImg) {
    if (!productPrices[productName]) {
      alert("Invalid product selected.");
      return;
    }

    const productPrice = productPrices[productName][packageOption];

    if (!productPrice) {
      alert("Package Not Avaliable..");
      return;
    }

    const existingItem = cart.find(
      (item) => item.name === productName && item.package === packageOption
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        name: productName,
        price: productPrice,
        img: productImg,
        package: packageOption,
        quantity: 1,
      });
    }

    updateCartUI();
  }

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const productName =
        productModal.querySelector(".modal-right h2").textContent;
      const productImg = productModal.querySelector(".main-image img").src;
      const selectedPackage = document.getElementById("sizes").value;

      if (selectedPackage === "Select package") {
        alert("Please select a package.");
        return;
      }

      addToCart(productName, selectedPackage, productImg);
    });
  }

  cartBtn.addEventListener("click", () => {
    cartModal.style.display = "flex";
    updateCartUI();
  });

  closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  clearCartBtn.addEventListener("click", () => {
    cart = [];
    updateCartUI();
  });

  document.getElementById("continue-shopping").addEventListener("click", () => {
    cartModal.style.display = "none";
  });

  document.getElementById("checkout").addEventListener("click", () => {
    alert("Proceeding to checkout...");
  });
});
