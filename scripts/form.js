// Populate the current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Populate the last modified date
document.getElementById('datemodified').textContent = document.lastModified;

// Product array for dynamic selection
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate the product select options
const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Handle form submission
document.getElementById('reviewForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Increment the review counter in localStorage
    let count = localStorage.getItem('reviewCount') || 0;
    count++;
    localStorage.setItem('reviewCount', count);
    document.getElementById('reviewCounter').innerText = count;

    // Hide the form and show the confirmation message
    document.getElementById('mainContent').innerHTML = `
        <div id="confirmationMessage">
            <h2>Review Submitted</h2>
            <p>Thank you for your review!</p>
            <p>Total reviews submitted: <span id="reviewCounter">${count}</span></p>
        </div>
    `;
});