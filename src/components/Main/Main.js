import React, { useEffect, useState } from 'react';
import logo from '../../images/fitness.webp';
import Cart from '../Cart/Cart';
import Category from '../Category/Category';
import './Main.css';

const Main = () => {
    const [categories,] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    const handleAddToCart = (category) => {
        console.log(category);
        const newCart = [...cart, category];
        setCart(newCart);
    }

    return (
        <div>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt=''></img>
                    <p>Fitness club</p>
                </div>
                <div><h3>Select today's exercise</h3></div>
            </div>

            <section className='container'>
                <div className='category-container'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                            handleAddToCart={handleAddToCart}
                        ></Category>)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </section>

        </div>
    );
};

export default Main;