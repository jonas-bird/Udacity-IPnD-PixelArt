// Initialize a variable to contain the color the user pick to draw with (default is black)
let selectedColor = '#000000';

// select the color picker input
const colorInput = document.getElementById('colorPicker');

// attach an event listener to colorInput
colorInput.addEventListener('input', () =>{
  selectedColor = colorInput.value;
});

// Initialize variables for hight and width of the grid
let gridRows = 0;
let gridColumns = 0;
const hightInput = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');

// Event listener for the submit button
const form = document.getElementById('sizePicker');
form.addEventListener('submit', makeGrid);
// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
  e.preventDefault();
  // printf testing
  console.log(selectedColor);
  console.log(gridRows);
  console.log(gridColumns);
}
