function discount(bookList){
    const discount = 0.3;
    boooksWithDiscount = bookList.map(book => {
        return {...livro, value: book.value - (book.value * discount)}

    })
    return boooksWithDiscount;
    }
