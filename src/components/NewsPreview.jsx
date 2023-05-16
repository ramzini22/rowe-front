import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const NewsPreview = (props) => {
    const {id, image, imageAlt, title} = props
    return (
        <article>
            <figure>
                <Link to={`/blog/article/${id}`} className='stretched-link' state={{...props}}>
                    <img src={checkPhotoPath(image)} alt={imageAlt}/>
                    <figcaption>
                        <h5>{title}</h5>
                    </figcaption>
                </Link>
            </figure>
        </article>
    );
};

export default NewsPreview;