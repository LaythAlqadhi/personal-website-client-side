import React from 'react';
import PropTypes from 'prop-types';

function Eslint({ className, size }) {
  const [width, height] = [size];

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
    >
      <path
        className={className}
        d="M34.945 7.686c-2.064 0-4.026 1.34-5.162 3.199L.773 61.367a6.177 6.177 0 0 0 0 5.988l29.01 50.172c1.033 1.859 2.994 2.787 5.162 2.787h58.121c2.065 0 4.027-.928 5.162-2.683l29.01-50.172c1.033-2.065 1.032-4.233-.103-5.988l-29.01-50.586c-1.032-1.858-2.992-3.2-5.16-3.2h-58.02zm29.01 11.87c.361 0 .722.105 1.031.311l37.063 21.37c.62.412 1.135 1.032 1.135 1.755v42.739h-.104c0 .722-.412 1.446-1.135 1.755l-36.959 21.37a1.875 1.875 0 0 1-2.064 0L25.862 87.59c-.62-.413-1.137-1.033-1.137-1.756V42.992c0-.723.414-1.446 1.136-1.756l37.061-21.369c.31-.206.672-.31 1.033-.31zm-.053 14.84a2.19 2.19 0 0 0-.98.233L38.662 48.67c-.62.31-1.033 1.031-1.033 1.65v28.082c0 .723.414 1.445 1.033 1.754l24.363 14.041a2.185 2.185 0 0 0 1.961 0l24.262-14.04c.62-.414 1.031-1.032 1.031-1.755V50.32c0-.619-.412-1.34-1.031-1.65L64.883 34.629a2.19 2.19 0 0 0-.98-.232z"
      />
    </svg>
  );
}

Eslint.defaultProps = {
  className: '',
  size: 64,
};

Eslint.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Eslint;
