buttons = document.querySelectorAll('.btn');

buttons.forEach( btn => {
    btn.addEventListener('click', filterBooks);
});


function filterBooks() {
    const elementBtn = document.getElementById(this.id); //pegando o id pelo escopo, do elemento que foi clicado.
    const categoria = elementBtn.value;
    console.log(categoria);
    console.log(bookList);
    let filteredBooks = categoria == 'disponiveis' ? bookList.filter(book => book.quantidade > 0) : bookList.filter(book => {
        return book.categoria == categoria;
    })
    showBooksOnScreen(filteredBooks);
    }
