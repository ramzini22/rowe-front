import React from 'react';
import {Link} from 'react-router-dom';

const CategoryCard = (props) => {
  return (
    <figure className='category'>
      <img src={props.img} alt={props.title} className={props.className}/>
      <figcaption>
        <h4><Link to='/' className='stretched-link'>{props.title}</Link></h4>
        </figcaption>
    </figure>
  );
};

export default CategoryCard;