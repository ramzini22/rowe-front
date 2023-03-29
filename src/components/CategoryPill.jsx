import React from 'react';
import {Link} from 'react-router-dom';

const CategoryPill = (props) => {
  return (
    <Link className={'category-pill '+props.className} to='/category'>
      <img src={props.img} alt={props.title} className={props.imgClassName}/>
      <h6>{props.title}</h6>
    </Link>
  );
};

export default CategoryPill;