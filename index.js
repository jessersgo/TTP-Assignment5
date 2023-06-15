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
        if(!individualCell.style.backgroundColor){ //if it isnt colored in
            individualCell.style.backgroundColor=colorSelection(); //then color in
        }
        
    }
})
//fill all cells with the currently selected color
document.getElementById("fillAll").addEventListener("click" , () => {
    let cells = table.getElementsByTagName("TD")
    for(let i=0; i<cells.length; i++){
        const individualCell = cells[i];
        individualCell.style.backgroundColor = colorSelection();
        
    }
})