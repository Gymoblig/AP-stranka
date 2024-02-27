window.onload = function() {
    const loader = document.getElementById("loader");
    loader.parentNode.removeChild(loader);
    const navbar = document.getElementsByClassName("navbar");
    
    // Check if at least one navbar element is found
    if (navbar.length > 0) {
        // Add the "fixed-top" class to the first navbar element
        navbar[0].classList.add("fixed-top");
    } else {
        console.error("No navbar element found with class name 'navbar'");
  }
};