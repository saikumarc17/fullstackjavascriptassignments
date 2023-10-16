const books = [
    {
        title: "The Namesake",
        author: "Jhumpa Lahiri",
        year: 2010
    },
    {
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997
    },
    {
        title: "A Suitable Boy",
        author: "Vikram Seth",
        year: 1993
    },
    {
        title: "The White Tiger",
        author: "Aravind Adiga",
        year: 2018
    },
    {
        title: "Midnight's Children",
        author: "Salman Rushdie",
        year: 1981
    }
];

let filteredBooks=books.filter((book)=>{
    return book.year>=2010;
})

filteredBooks.forEach((ele)=>{
    return ele.author=ele.author.toUpperCase();
})

console.log(filteredBooks);