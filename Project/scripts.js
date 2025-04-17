document.addEventListener("DOMContentLoaded", function () {
  // Handle contact form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form from submitting

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const contactData = {
        name: name,
        email: email,
        message: message,
      };

      // Using localStorage to save contact data
      localStorage.setItem("contactData", JSON.stringify(contactData));

      alert(`Thank you, ${name}! Your message has been received.`);

      // Clear form fields
      document.getElementById("contactForm").reset();
    });

  // Example of using an array and conditional branching
  const services = [
    "Local Transportation",
    "Long-Distance Transport",
    "Freight Services",
    "Moving Solutions",
  ];
  if (services.length > 0) {
    console.log("Available Services:", services);
    services.forEach((service) => {
      console.log(service);
    });
  }
});
