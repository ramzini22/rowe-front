import React from 'react';

const NewsPreview = (props) => {
  return (
    <article>
      <figure>
        <img src={props.img} alt={props.title} />
        <figcaption>
          <h5>{props.title}</h5>
        </figcaption>
      </figure>
    </article>
  );
};

export default NewsPreview;