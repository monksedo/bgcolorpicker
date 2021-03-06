/**************************************************************************
 * Basic color picker exercise
 */

// Select all elements for later use
let picker1 = document.querySelector('.picker1');
let picker2 = document.querySelector('.picker2');
let h3Title = document.querySelector('.h3Title');
let bgColor = document.querySelector('.bgColor');

console.log(picker1.value);
console.log(picker2.value);

// Apply change color and update new colors label
function changeBgColor() {
  console.log(picker1.value);
  console.log(picker2.value);
  bgColor.style.backgroundImage = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;
  // h3Title.textContent = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;
  h3Title.textContent = bgColor.style.backgroundImage;
}
// Set the default color value on page load
bgColor.style.backgroundImage = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;

// Display default colors on page loaded
h3Title.textContent = `linear-gradient(to right, ${picker1.value}, ${picker2.value})`;

// Change first color on color picker confirmed
picker1.addEventListener('input', changeBgColor);

// Change second color on color picker confirmed
picker2.addEventListener('input', changeBgColor);



