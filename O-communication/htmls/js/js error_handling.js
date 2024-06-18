document.addEventListener("DOMContentLoaded", function () {
    // Function to check if an image is missing and replace it
    function checkImages() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.onerror = function () {
                img.src = 'images/placeholder.png'; // Path to your placeholder image
            };
        });
    }

    // Function to check if a CSS file is missing and log an error
    function checkCSS() {
        const link = document.querySelector('link[href="css/styles.css"]');
        if (!link.sheet || link.sheet.cssRules.length === 0) {
            console.error('CSS file is missing or empty.');
        }
    }

    // Call the functions
    checkImages();
    checkCSS();
});
