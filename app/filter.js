buttons = document.querySelectorAll('.btn');

buttons.forEach( btn => {
    btn.addEventListener('click', filterBooks);
});


function filterBooks() {
    const elementBtn = document.getElementById(this.id); //pegando o id pelo escopo, do elemento que foi clicado.
    const categoria = elementBtn.value;
    console.log(categoria);
    console.log(bookList);
    let filteredBooks = categoria == 'disponiveis' ? filteredBookByDisponibility() : filterBooksByCategory(categoria);
    showBooksOnScreen(filteredBooks);
    if(categoria == 'disponiveis'){
        let calcDisponibleBooks = calcTotalValueDisponibleBooks(filteredBooks);
        showTotalValueOfDisponibleBooks(calcDisponibleBooks);
    }
}

function filterBooksByCategory(categoria) {
    return bookList.filter(book => book.categoria == categoria);
}

function filteredBookByDisponibility() {
    return bookList.filter(book => book.quantidade > 0);
}

function showTotalValueOfDisponibleBooks(totalValue) {
    elementWithTotalValuesOfBooksAvaliable.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
    `
}
