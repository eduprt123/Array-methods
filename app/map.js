function putDiscount(bookList){
    const discount = 0.3;
    booksWithDiscount = bookList.map(book => {
        return { ...book, preco: book.preco - (book.preco * discount)}
    })
    return booksWithDiscount;
}
