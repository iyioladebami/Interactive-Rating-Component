// index.html JavaScript
let buttons = document.getElementsByClassName("score");
let currentValue = null;

function setRating(rating) {
  // Remove active state from previously selected button (if any)
  if (currentValue !== null) {
    buttons[currentValue - 1].classList.remove("active");
  }
  // Add active state to the current button
  buttons[rating - 1].classList.add("active");
  // Update current selection globally
  currentValue = rating;
}

function submitForm() {
  // Redirect to thanks.html with the selected rating as a parameter
  if (currentValue !== null) {
    window.location.href = "thanks.html?rating=" + currentValue;
  } else {
    alert("Please select a rating before submitting.");
  }
}

// thanks.html JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Parse the URL to get the rating parameter value
    const params = new URLSearchParams(window.location.search);
    const rating = params.get("rating");

    // Grab the #thankRating span
    let thankRating = document.getElementById("thankRating");

    // Set its innerHTML to the value you want
    if (rating !== null) {
        thankRating.innerHTML = rating ;
    }
});


