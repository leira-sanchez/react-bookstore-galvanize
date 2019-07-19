import React from 'react';
import CartItem from './CartItem';

const Cart = ({currentBooks, handleRemove}) => {
    console.log("currentBooks:",currentBooks);
    const handleRemoveBook = (e) => {
        console.log('in the handleRemoveBook');
        //why is this undefined?
        console.log('etargetvalue:',currentBooks[e.target]);
        handleRemove(currentBooks[e.target.value]);
    }
    let allBooksCart = currentBooks.map((book, index) => {
        return(<CartItem key={index} value={book.id} handleRemove={handleRemoveBook} book={book} />)
    })
    
    return (
        <div className="col-6">
            <h2>Shopping Cart</h2>
            {allBooksCart}
        </div>
    )
}
export default Cart;