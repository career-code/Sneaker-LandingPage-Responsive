const wrapper = document.querySelector(".sliderWrapper");
const productBar = document.querySelectorAll(".productBar li");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "Images/air.png",
            },
            {
                code: "darkblue",
                img: "Images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "Images/jordan.png",
            },
            {
                code: "green",
                img: "Images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "Images/blazer.png",
            },
            {
                code: "green",
                img: "Images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "Images/crater.png",
            },
            {
                code: "lightgray",
                img: "Images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "Images/hippie.png",
            },
            {
                code: "black",
                img: "Images/hippie2.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

productBar.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});


// Search Box

// Get the input and suggestion list elements
const searchInput = document.getElementById("searchInput");
const suggestionList = document.getElementById("suggestionList");

// Sample list of suggestions
const suggestions = ["Air Force", "Jordan", "Blazer", "Crater", "Hippie"];

// Function to update the suggestion list based on the input value
function updateSuggestions() {
    const inputValue = searchInput.value.toLowerCase();
    suggestionList.innerHTML = "";

    for (let suggestion of suggestions) {
        if (suggestion.toLowerCase().includes(inputValue)) {
            const li = document.createElement("li");
            li.textContent = suggestion;
            li.addEventListener("click", () => {
                searchInput.value = suggestion;
                suggestionList.innerHTML = "";
            });
            suggestionList.appendChild(li);
        }
    }
}

// Event listener to update suggestions when the input changes
searchInput.addEventListener("input", updateSuggestions);

// Event listener to hide suggestions when clicking outside the search bar
document.addEventListener("click", (event) => {
    if (event.target !== searchInput) {
        suggestionList.innerHTML = "";
    }
});
