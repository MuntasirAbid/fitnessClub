import React from 'react';
import './Category.css'

const Category = (props) => {
    const { category, img, description, age, time } = props.category;
    return (
        <div className='category'>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Category;