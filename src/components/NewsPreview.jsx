import React from 'react';
import {Link} from 'react-router-dom';

const NewsPreview = (props) => {
  return (
    <article>
      <figure>
        <img src={props.img} alt={props.title} />
        <figcaption>
          <h5><Link to="/blog/article" className='stretched-link'>{props.title}</Link></h5>
        </figcaption>
      </figure>
    </article>
  );
};

export default NewsPreview;