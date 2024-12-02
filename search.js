document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-container input"); // Search input field
    const contentSections = document.querySelectorAll(".w3-main > *"); // All main content sections

    // Add event listener for the search input
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase(); // Get the search query
        
        // Loop through each content section
        contentSections.forEach(section => {
            const textContent = section.textContent.toLowerCase(); // Get the section text
            
            // Show or hide the section based on the search query
            if (textContent.includes(query)) {
                section.style.display = "block"; // Show matching sections
                document.querySelector(".search-container input").style.backgroundColor = "white";

            } else {
                section.style.display = "none"; // Hide non-matching sections
            }
        });
    });
});

