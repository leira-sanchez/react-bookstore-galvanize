import React from 'react';
import Books from './Books';

const OneBook = ({ book, handleBook }) => {
    return (
        <div className="container row">
            <ul className="col-4">
                <li >{book.title}</li>
            </ul>
            <ul className="col-4">
                <li>{book.author}</li>
            </ul>
            <ul className="col-4">
                <li>${book.price}</li>
            </ul>
            <button onClick={handleBook} value={book.id}>Add to Cart</button>
        </div>
    )
}
export default OneBook;