import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const CategoryCard = (props) => {
    const {image, name, className, id} = props
    return (
        <figure className='category'>
            <img src={checkPhotoPath(image)} alt={name} className={className}/>
            <figcaption>
                <h4><Link to={`/catalog`} state={{idCategory:id}} className='stretched-link'>{name}</Link></h4>
            </figcaption>
        </figure>
    );
};

export default CategoryCard;