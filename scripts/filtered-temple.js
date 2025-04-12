document.addEventListener("DOMContentLoaded", () => {
  const templeContainer = document.getElementById("temple-container");

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    },
    {
      templeName: "Provo City Center",
      location: "Provo, Utah, United States",
      dedicated: "2016, March, 20",
      area: 153000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    },
    {
      templeName: "Fort Lauderdale Florida",
      location: "Fort Lauderdale, Florida, United States",
      dedicated: "2014, July, 13",
      area: 20000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    },
    {
      templeName: "San Juan Puerto Rico",
      location: "San Juan, Puerto Rico",
      dedicated: "2000, June, 29",
      area: 182000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    },
  ];

  const createTempleCard = (temple) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");
    card.innerHTML = `
            <img loading="lazy" src="${temple.imageUrl}" alt="${temple.templeName}">
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} square feet</p>
        `;
    return card;
  };

  const displayTemples = (templeList) => {
    templeContainer.innerHTML = ""; // Clear the previous content
    templeList.forEach((temple) => {
      const templeCard = createTempleCard(temple);
      templeContainer.appendChild(templeCard);
    });
  };

  // Filter for navigation
  document.getElementById("all").addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(temples);
  });

  document.getElementById("old").addEventListener("click", (e) => {
    e.preventDefault();
    const oldTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() < 1900
    );
    displayTemples(oldTemples);
  });

  document.getElementById("new").addEventListener("click", (e) => {
    e.preventDefault();
    const newTemples = temples.filter(
      (temple) => new Date(temple.dedicated).getFullYear() > 2000
    );
    displayTemples(newTemples);
  });

  document.getElementById("large").addEventListener("click", (e) => {
    e.preventDefault();
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    displayTemples(largeTemples);
  });

  document.getElementById("small").addEventListener("click", (e) => {
    e.preventDefault();
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    displayTemples(smallTemples);
  });

  // Initialize to show all temples
  displayTemples(temples);

  // Update the footer with the current year and the last modified date
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("datemodified").textContent = document.lastModified;
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navigation = document.getElementById("navigation");

  const initSmallScreenNav = () => {
    if (window.innerWidth < 768) {
      if (!document.getElementById("menu-toggle")) {
        // Create menu toggle button
        const menuToggle = document.createElement("button");
        menuToggle.id = "menu-toggle";
        menuToggle.setAttribute("aria-label", "Open Navigation");
        menuToggle.textContent = "☰";
        header.appendChild(menuToggle);

        // Show navigation on click
        menuToggle.addEventListener("click", () => {
          navigation.classList.add("active");

          // Add close button dynamically
          if (!document.getElementById("close-menu")) {
            const closeMenu = document.createElement("button");
            closeMenu.id = "close-menu";
            closeMenu.setAttribute("aria-label", "Close Navigation");
            closeMenu.textContent = "X";
            navigation.insertBefore(closeMenu, navigation.firstChild);

            // Hide navigation on click
            closeMenu.addEventListener("click", () => {
              navigation.classList.remove("active");
            });
          }
        });
      }
    }
  };

  // Initialize for small screens
  initSmallScreenNav();

  // Remove toggle functionality on large screens
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      navigation.classList.remove("active"); // Hide navigation
      const menuToggle = document.getElementById("menu-toggle");
      const closeMenu = document.getElementById("close-menu");

      if (menuToggle) menuToggle.remove(); // Remove toggle button
      if (closeMenu) closeMenu.remove(); // Remove close button
    } else {
      initSmallScreenNav(); // Re-initialize for small screens
    }
  });
});
