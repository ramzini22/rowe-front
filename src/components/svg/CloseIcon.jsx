import React from 'react';

const CloseIcon = (props) => {
  return (
    <svg className={props.className} width="1em" height="1em" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="28" rx="5" fill="white"/>
      <path d="M8.16675 19.8334L19.8334 8.16669M8.16675 8.16669L19.8334 19.8334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CloseIcon;