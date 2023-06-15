let table = document.getElementById("table")

function addRow(){
    let columns = table.rows[0].cells.length;
    let row = table.insertRow(); //insertRow is a method alrdy defined in js

    for (let i=0; i<columns; i++){
        const cell = row.insertCell() //insertCell makes another table
        cell.innerHTML = ""
    }
}
function removeRow(){
    let rows = table.rows.length
    if(rows>1){
        table.deleteRow(rows-1)
    }
}
function addColumn(){
    let rows = table.rows.length;

    for(let i=0; i < rows; i++){
        const cell = table.rows[i].insertCell();
        cell.innerHTML = "";
    }
}
function removeColumn(){
    let rowsCount = table.rows.length;
    
    if (rowsCount > 1) {
        let columnsCount = table.rows[0].cells.length;
        
        for (let i = 0; i < rowsCount; i++) {
        
        table.rows[i].deleteCell(columnsCount - 1);
        }
    }
}
// function clearAll(){
//     var rowsCount = table.rows.length;

//     for (var i = 0; i < rowsCount; i++) {
//       table.deleteRow();
//     }
// }
function colorSelection(){
    const Colors = document.getElementById('colors')
    let color = Colors.value.toLowerCase();
    return color;
}
table.addEventListener("click", (e) =>{
    let clickCell = e.target;
    if(clickCell.tagName === "TD"){
        clickCell.style.backgroundColor= colorSelection();
    }
})

//changing the color of cells
document.getElementById("newButton").addEventListener("click", () =>{
    let cells = table.getElementsByTagName("TD")
    //cells are the array
    for(let i=0; i<cells.length; i++){
        const individualCell = cells[i];
        if((!individualCell.style.backgroundColor) || individualCell.style.backgroundColor === "transparent" ){ //if it isnt colored in
            individualCell.style.backgroundColor=colorSelection(); //then color in
        }
        
    }
})

//
//fill all cells with the currently selected color
document.getElementById("fillAll").addEventListener("click" , () => {
    let cells = table.getElementsByTagName("TD")
    for(let i=0; i<cells.length; i++){
        const individualCell = cells[i];
        individualCell.style.backgroundColor = colorSelection();
    }
})

//Issue #12 Solved
//clear all cells/restore all cells to their original/initial color
document.getElementById("clear").addEventListener("click", () => {
    let cells = table.getElementsByTagName("TD")
    for(let i=0; i<cells.length; i++){
        const individualCell = cells[i];
        individualCell.style.backgroundColor = "transparent"; //then color in
    }
})

// Issue #13 Solved
//click and hold (mouseover) from a single cell (start) 
//to a different cell (end) such that all affected/hovered-over 
//cells from start to end change to the currently selected color

let holding = false;
table.addEventListener("mousedown", (event) => {
  let cell = event.target;
  if (cell.tagName === "TD") {
    holding = true;
    cell.style.backgroundColor = colorSelection();
  }
});

table.addEventListener("mouseover", (event) => {
  let cell = event.target;
  if (holding && cell.tagName === "TD") {
    cell.style.backgroundColor = colorSelection();
  }
});

table.addEventListener("mouseup", () => {
  holding = false;
});

document.addEventListener("mouseup", () => {
  holding = false;
});