// Image switcher code - if the user clicks the pink tulips the image changes
let myImage = document.querySelector('img');

myImage.onclick = function() {
  // Get the current source attribute of the image
  let mySrc = myImage.getAttribute('src');

  // Check if the current source is 'image/pink_tulips.jpeg'
  if (mySrc === 'image/pink_tulips.jpeg') {
    // Change the source to 'image/dior_dior.jpeg' if it is pink tulips
    myImage.setAttribute('src', 'image/dior_dior.jpeg');
  } else {
    // Change the source back to 'image/pink_tulips.jpeg' if it is not pink tulips
    myImage.setAttribute('src', 'image/pink_tulips.jpeg');
  }
}

// Button and background color toggle code
let myButton = document.querySelector('button');
let isGreen = false;

// Function to toggle background color between light pink and sage green
function toggleBackgroundColor() {
  if (isGreen) {

    document.body.style.backgroundColor = '#ffc0cb';
  } else {
    
    document.body.style.backgroundColor = '#c1d5a5';
  }
  
  isGreen = !isGreen;
}

// Set the onclick event for the button to trigger the background color toggle
myButton.onclick = function () {
  toggleBackgroundColor();
};
