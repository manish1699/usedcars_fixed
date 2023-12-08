// script.js
function displayCars(cars) {
    const carListings = document.getElementById("car-listings");

    cars.forEach(car => {
        const carContainer = document.createElement("div");
        carContainer.className = "car-container";

        carContainer.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>Model: ${car.model}</p>
            <p>Year: ${car.year}</p>
            <p>Miles: ${car.miles}</p>
            <p>Price: $${car.price}</p>
            <p>Zipcode: ${car.zipcode}</p>
            <button onclick="addToWishlist('${car.name}')">Add to Wishlist</button>
        `;

        carListings.appendChild(carContainer);
    });
}

function filterCars() {
    // Implement filtering logic based on search criteria
    // Update the display accordingly
    console.log("Filtering cars...");
}

function addToWishlist(carName) {
    // Implement wishlist functionality
    // Add the selected car to the user's wishlist
    console.log(`${carName} added to wishlist!`);
}

// Sample data for cars (replace with your actual data)
const carsData = [
    { name: "Toyota Camry", model: "Sedan", year: 2018, miles: 30000, price: 18000, zipcode: "12345", image: "https://example.com/car1.jpg" },
    { name: "Honda Accord", model: "Coupe", year: 2019, miles: 25000, price: 20000, zipcode: "67890", image: "https://example.com/car2.jpg" },
    { name: "Ford Mustang", model: "Convertible", year: 2017, miles: 35000, price: 25000, zipcode: "23456", image: "https://example.com/car3.jpg" },
    { name: "Chevrolet Malibu", model: "Sedan", year: 2020, miles: 20000, price: 22000, zipcode: "78901", image: "https://example.com/car4.jpg" },
    { name: "Nissan Altima", model: "Sedan", year: 2016, miles: 40000, price: 15000, zipcode: "34567", image: "https://example.com/car5.jpg" },
    { name: "BMW 3 Series", model: "Sedan", year: 2021, miles: 15000, price: 35000, zipcode: "89012", image: "https://example.com/car6.jpg" },
    { name: "Mercedes-Benz C-Class", model: "Sedan", year: 2019, miles: 18000, price: 30000, zipcode: "45678", image: "https://example.com/car7.jpg" },
    { name: "Audi A4", model: "Sedan", year: 2020, miles: 22000, price: 32000, zipcode: "56789", image: "https://example.com/car8.jpg" },
    // Add more cars here...
];

// Load cars data on page load
window.addEventListener('load', () => {
    displayCars(carsData);
});