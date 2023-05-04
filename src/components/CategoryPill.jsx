import React from 'react';
import {Link} from 'react-router-dom';

const CategoryPill = (props) => {
    const {image, title, className, imgClassName, id} = props
    return (
        <Link className={'category-pill ' + className} to='/catalog' state={{idCategory:id}}>
            <img src={'../../'+image} alt={title} className={imgClassName}/>
            <h6>{title}</h6>
        </Link>
    );
};

export default CategoryPill;