import React from 'react';
import PropTypes from 'prop-types';

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
const intRegex = /^\d+$/;

const Star = ({
  stars, outOf, full, empty, stroke,
}) => {
  if (!intRegex.test(stars)) {
    return 'Error: This component cannot handle fractions of stars.';
  }
  if (stars > outOf) {
    return 'Error: "stars" cannot exceed "outOf."';
  }
  if (stars < 0) {
    return 'Error: "stars" cannot be less-than-zero.';
  }
  if (outOf < 2) {
    return 'Error: "outOf" cannot be less than two.';
  }

  const arr = Array(outOf).fill(0);
  arr.fill(1, stars);
  const starReview = arr.map((a, i) => (
    <svg
      key={i} // eslint-disable-line
      xmlns="http://www.w3.org/2000/svg"
      fill={a === 0 ? full : empty}
      stroke={stroke}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  ));
  return <div>{starReview}</div>;
};

const hexPropType = (props, propName, componentName) =>
  (hexRegex.test(props[propName])
    ? null
    : new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed.`));

Star.propTypes = {
  stars: PropTypes.number.isRequired,
  outOf: PropTypes.number.isRequired,
  full: hexPropType,
  empty: hexPropType,
  stroke: hexPropType,
};

Star.defaultProps = {
  full: 'orange',
  empty: 'white',
  stroke: 'black',
};
export default Star;
