

function addBook() {
    event.preventDefault();

    let title = document.getElementById("book_title").value;
    let author = document.getElementById("author_name").value;
    let isbn = document.getElementById("isbn").value;
    let available = document.getElementById("available").value;

    addRowToTable(title, author, isbn, available);


    document.getElementById("book_title").value = "";
    document.getElementById("author_name").value = "";
    document.getElementById("isbn").value = "";
    document.getElementById("available").value = "";
}

function addRowToTable(title, author, isbn, available) {
    let table = document.getElementById("book-list-table").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    cell1.innerHTML = title;
    cell2.innerHTML = author;
    cell3.innerHTML = isbn;
    cell4.innerHTML = available;
}


