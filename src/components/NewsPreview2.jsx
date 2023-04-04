import React from 'react';
import {Link} from 'react-router-dom';

const NewsPreview2 = (props) => {
  return (
    <article>
      <figure>
        <img src={props.img} alt={props.title} />
        <figcaption>
          <h4 className='fw-7'>{props.title}</h4>
          <p>{props.text}</p>
          <Link to='/blog/article' className='stretched-link btn-3 mt-2 mt-sm-3 mt-md-4 mt-lg-5'>Подробнее</Link>
        </figcaption>
      </figure>
    </article>
  );
};

export default NewsPreview2;