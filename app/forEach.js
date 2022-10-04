let elementForInsertBooks = document.getElementById('livros');
let elementWithTotalValuesOfBooksAvaliable = document.getElementById('valor_total_livros_disponiveis');

//metodo para mostrar elementos na tela

function showBooksOnScreen(bookList) {
    elementForInsertBooks.innerHTML = '';
    bookList.forEach(book => {
        // criando verificação de disponibilidades
        let avaliable = book.quantidade > 0 ? 'livro__imagens' : 'livros__imagens indisponivel';
        elementForInsertBooks.innerHTML += 
            `
            <div class="livro">
                <img class="${avaliable}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                    ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${book.categoria}</span>
          </div>
        </div>
    `
    })
}

// function verifyAvaliableBook(book){
//    if(book.quantidade > 0)
//     // if(book.quantidade > 0){
//     //     return 'livro__imagens';
//     // }else{
//     //     return 'livros__imagens indisponivel';
//     // }
// }

