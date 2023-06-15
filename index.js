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
{/* <option value="white">Colors</option>
        <option value="red">Red</option>
        <option value="purple">Purple</option>
        <option value="lime">Green</option>
        <option value="blue">Blue</option> */}