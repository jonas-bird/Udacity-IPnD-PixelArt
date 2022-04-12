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

// Add event listener to table,
const table = document.getElementById('pixelCanvas');
table.addEventListener('click', colorPixel)
// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
  // remove previous grid
  while (table.lastChild){
    table.removeChild(table.lastChild);
  }
  // if there is some way for these values to change while the grid is being drawn
  // I would rather not find out...
  gridRows = hightInput.value;
  gridColumns = inputWidth.value;

  for(let rows=0; rows < gridRows; rows++){
    let newRow = document.createElement('tr');
    for(let columns=0; columns < gridColumns; columns++){
      let newCell = document.createElement('td');
      newRow.appendChild(newCell);
    }
    table.appendChild(newRow);
  }
  e.preventDefault();
}

// Function to color the 'pixel' clicked by the user
function colorPixel(e){
  if(e.target.nodeName === 'TD'){
    e.target.style.backgroundColor = selectedColor;
  }
}
