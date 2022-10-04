function calcTotalValueDisponibleBooks(bookList){
    return bookList.reduce((acc, livro) => acc + livro.valor, 0);
}