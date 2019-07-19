import React from 'react';
import OneBook from './OneBook';

const Books = ({ handleBook, books }) => {

    const handleClick = (e) => {
        console.log('In the handleClick');
        handleBook(books[e.target.value]);
    }

    let allBooks = books.map((book, index) => {
        return (<OneBook handleBook={handleClick} key={index} book={book} />)
    })
    return (
        <div className="Books col-6">
            <h2>Books</h2>
            <div className="row">
                <h3 className="col-4">Book</h3>
                <h3 className="col-4">Author</h3>
                <h3 className="col-4">Price</h3>
            </div>
            {allBooks}
        </div>
    )
};

export default Books;