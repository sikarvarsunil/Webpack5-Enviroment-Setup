import React from 'react';

const Heading = (props) => {
  const { type } = props;
  let headingType = <h5>{props.children}</h5>;
  if(type === 'h1') {
    headingType = <h1>{props.children}</h1>;
  } else if(type === 'h2') {
    headingType = <h2>{props.children}</h2>;
  } else if(type === 'h3') {
    headingType = <h3>{props.children}</h3>;
  } else if(type === 'h4') {
    headingType = <h4>{props.children}</h4>;
  } else {
    headingType = <h5>{props.children}</h5>;
  }

  return headingType;
}
export default Heading;