var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nomePeca"] = document.getElementById("nomePeca").value;
    formData["codPeca"] = document.getElementById("codPeca").value;
    formData["quantidade"] = document.getElementById("quantidade").value;
    formData["fabricante"] = document.getElementById("fabricante").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("pecaList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomePeca;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.codPeca;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.quantidade;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.fabricante;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nomePeca").value = "";
    document.getElementById("codPeca").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("fabricante").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomePeca").value = selectedRow.cells[0].innerHTML;
    document.getElementById("codPeca").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantidade").value = selectedRow.cells[2].innerHTML;
    document.getElementById("fabricante").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nomePeca;
    selectedRow.cells[1].innerHTML = formData.codPeca;
    selectedRow.cells[2].innerHTML = formData.quantidade;
    selectedRow.cells[3].innerHTML = formData.fabricante;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("pecaList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nomePeca").value == "") {
        isValid = false;
        document.getElementById("nomePecaValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomePecaValidationError").classList.contains("hide"))
            document.getElementById("nomePecaValidationError").classList.add("hide");
    }
    return isValid;
}

