window.onload = function() {
    const loader = document.getElementById("loader");
  
    // Fade out the loader
    let opacity = 1;
    const fadeInterval = setInterval(() => {
      opacity -= 0.1; // Adjust fade speed as needed
      loader.style.opacity = opacity;
      if (opacity <= 0) {
        clearInterval(fadeInterval);
        loader.parentNode.removeChild(loader);
      }
    }, 50); // Adjust fade duration as needed
  
    const navbar = document.getElementsByClassName("navbar");
  
    // Check if at least one navbar element is found
    if (navbar.length > 0) {
      // Add the "fixed-top" class to the first navbar element
      navbar[0].classList.add("fixed-top");
    } else {
      console.error("No navbar element found with class name 'navbar'");
    }
  };