import React from 'react';
import './Category.css'

const Category = ({ category, }) => {

    const { categoryName, img, description, age, time } = category;

    return (
        <div className='category'>
            <img src={img} alt=""></img>
            <div className='category-info'>
                <p><b>{categoryName}</b></p>
                <p>Description: {description}</p>
                <p>For age: {age}</p>
                <p>Time required:{time} </p>
            </div>
            <button onClick={() => handleAddToCart(category)} className='btn'>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Category;