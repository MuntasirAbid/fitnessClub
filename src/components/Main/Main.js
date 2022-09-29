import React, { useEffect, useState } from 'react';
import logo from '../../images/fitness.webp';
import Category from '../Category/Category';
import './Main.css';

const Main = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt=''></img>
                <p>Fitness club</p>
            </div>
            <section className='container'>
                <div className='category-container'>
                    {
                        categories.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
                <div className='cart'>
                    <h>Here it is cart</h>
                </div>
            </section>
        </div>
    );
};

export default Main;