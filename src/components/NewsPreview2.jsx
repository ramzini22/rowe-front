import React from 'react';
import {Link} from 'react-router-dom';
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const NewsPreview2 = (props) => {
    const {title, image, imageAlt, id, description} = props
    return (
        <article>
            <figure>
                    <img src={checkPhotoPath(image)} alt={imageAlt}/>
                    <figcaption>
                        <h4 className='fw-7'>{title}</h4>
                        <div>
                            <p dangerouslySetInnerHTML={{__html: description}}></p>
                        </div>
                        <Link to={`/blog/article/${id}`} className='stretched-link btn-3 mt-2 mt-sm-3 mt-md-4 mt-lg-5' state={{...props}}>
                            Подробнее
                        </Link>
                    </figcaption>
            </figure>
        </article>
);
};

export default NewsPreview2;