let btnSortByPrice = document.getElementById('btnOrdenarPorPreco');

btnSortByPrice.addEventListener('click', sortBookByPrice);

function sortBookByPrice(){
    let bookListSorted = bookList.sort((a,b) => a.preco - b.preco);
    showBooksOnScreen(bookListSorted);
}