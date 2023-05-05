import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const CategoryPill = (props) => {
    const {image, name, className, imgClassName, id} = props
    return (
        <Link className={'category-pill ' + className} to='/catalog' state={{idCategory:id}}>
            <img src={checkPhotoPath(image)} alt={name} className={imgClassName}/>
            <h6>{name}</h6>
        </Link>
    );
};

export default CategoryPill;