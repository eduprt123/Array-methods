let bookList = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';  

getBooksFromAPI();


async function getBooksFromAPI() {
    const response = await fetch(endPointAPI); //espera a execução da promise;
    bookList = await response.json(); 
    let boooksWithDiscount = discount(bookList);
    showBooksOnScreen(boooksWithDiscount);
}

