import React from 'react';
import CartItem from './CartItem';

const Cart = ({ currentBooks, handleRemove }) => {
    console.log("currentBooks:", currentBooks);
    const handleRemoveBook = (e) => {
        console.log('in the handleRemoveBook');
        //why is this undefined?
        console.log('etargetvalue:', [e.target]);
        handleRemove([e.target.value]);
    }
    function totalPrice(currentBooks) {
        let total = 0;
        currentBooks.map(book => {
            total += (parseInt(book.price));
            return total;
        })
        return total;
    };
    let totalOrder = totalPrice(currentBooks);
    let allBooksCart = currentBooks.map((book, index) => {
        return (<CartItem key={index} value={book.id} handleRemove={handleRemoveBook} book={book} />)
    })

    return (
        <div className="col-6">
            <h2>Shopping Cart</h2>
            <div className="row">
                <h3 className="col-6">Title</h3>
                <h3 className="col-3">Price</h3>
            </div>
            {allBooksCart}
            <h3>Total: ${totalOrder}</h3>
        </div>
    )
}
export default Cart;