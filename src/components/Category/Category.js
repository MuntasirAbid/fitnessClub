import React from 'react';
import './Category.css'

const Category = (props) => {
    const { category, img, description, age, time } = props.category;
    return (
        <div className='category'>
            <img src={img} alt=""></img>
            <div className='category-info'>
                <p><b>{category}</b></p>
                <p>Description: {description}</p>
                <p>For age: {age}</p>
                <p>Time required:{time} </p>
            </div>
        </div>
    );
};

export default Category;