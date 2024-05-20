// I used Chatgpt for my code


// Toggle between hiding menu and unhide it
document.addEventListener("DOMContentLoaded", function() {
    var menuHeading = document.getElementById("menu-heading");
    var menu = document.querySelector(".hide");
  
    // Toggle menu visibility when heading is clicked
    menuHeading.addEventListener("click", function() {
      menu.classList.toggle("show-menu");
    });
  });



// Resizing window event

  function handleResize() {
    var windowWidth = window.innerWidth;
    var menu = document.querySelector("#hide");
  
    if (windowWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  // Add event listener to window for the resize event
  window.addEventListener("resize", handleResize);
  
  // Call the handleResize function immediately when the page loads
  document.addEventListener("DOMContentLoaded", function() {
    handleResize();
  });


  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;

  }


  // Add an event listener to the .gallery section
  document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    gallery.addEventListener('click', viewHandler);
});



  function viewHandler(event) {
    // Create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
  
    // Get the src attribute from that element and 'split' it on the "-"
    const srcParts = clickedElement.src.split('-');
  
    // Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = srcParts[0] + '-full.jpeg';
  
    // Insert the viewerTemplate into the top of the body element
    const viewerHtml = viewerTemplate(newSrc, clickedElement.alt);
    document.body.insertAdjacentHTML('afterbegin', viewerHtml);
  
    // Add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
  }
  
  function closeViewer() {
    // Remove the viewer element when the close button is clicked
    const viewer = document.querySelector('.viewer');
    viewer.remove();
  }
  