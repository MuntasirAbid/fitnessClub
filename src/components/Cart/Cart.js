import React from 'react';
import './Cart.css'

const Cart = ({ cart, }) => {

    let total = 0;

    for (const category of cart) {
        total = total + category.time;

    }




    return (
        <div className='cart'>
            <h1>Muntasir Al Abid</h1>
            <h2>Add A Break</h2>
            <button ><p>10</p></button>
            <button ><p>20</p></button>
            <button><p>30</p></button>
            <button><p>40</p></button>

            <h2>Exercise Details</h2>
            <p>Exercise time: {total}min</p>
            <p>Break time:  </p>

        </div>
    );
};

export default Cart;