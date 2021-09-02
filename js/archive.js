
// book search Area

const searchBook = () => {

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //    console.log(searchText);
    //clear data
    searchField.value = '';
    if (searchText == '') {
        document.getElementById("error-message").classList.remove("d-none");
        document.getElementById("error-message").innerHTML =
            "<p class='text-center p-3 bg-danger w-50 mx-auto rounded mb-5 text-white'><b>Please enter a book name...</b></p>";
    }
    else {
        const url = `https://openlibrary.org/search.json?q=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.docs))

    }
}

//book display card area

const displaySearchResult = docs => {
    const searchBookResult = document.getElementById('search-book-result');

    searchBookResult.innerHTML = "";
    if (docs.length == 0) {
        document.getElementById("error-message").classList.remove("d-none");
        document.getElementById("error-message").innerHTML =
            `<p class='text-center p-3 bg-danger w-50 mx-auto rounded mb-5 text-white'><b>Sorry sir, Your value is NOT found.....!</b></p>`;
    }


    else {

        document.getElementById("error-message").classList.add("d-none");
        docs.forEach(Sbook => {
            console.log(Sbook.title);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card h-100">
                <img src="https://covers.openlibrary.org/b/id/${Sbook.cover_i}-L.jpg" class="card-img-top h-75" alt="...">
                <div class="card-body">
                     <h5 class="card-title">Book Name: ${Sbook.title}</h5>
                     <h6 class="">Autor: ${Sbook.author_name}</h6>
                     <h6 class="">First Publish: ${Sbook.first_publish_year}</h6>
                     <h6 class="">Publisher: ${Sbook.publisher}</h6>
               </div>
            </div>
        `;
            searchBookResult.appendChild(div);


        })

        docs.forEach(myFunction);
        function myFunction() {
            sum = docs.length;
        }
        console.log(sum);
        document.getElementById("total-item").innerHTML = sum;



    }
}





