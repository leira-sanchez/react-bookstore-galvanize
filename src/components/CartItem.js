import React from 'react';

const CartItem = ({ book, handleRemove }) => {
    // console.log("book:" ,book);
    return (
        <div className="CartItem row">
            < p className="col-6" >{book.title}</p>
            <p className="col-3">${book.price}</p>
            <button className="col-3" onClick={handleRemove} value={book.title}>Remove</button>
        </div>
    )
}

export default CartItem;