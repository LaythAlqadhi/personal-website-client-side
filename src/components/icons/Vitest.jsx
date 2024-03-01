import React from 'react';
import PropTypes from 'prop-types';

function Vitest({ className, size }) {
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
        d="M39.16 82.4 10.54 53.781a6.196 6.196 0 0 0-8.762 8.762l57.828 57.826a6.176 6.176 0 0 0 4.38 1.815h.026a6.175 6.175 0 0 0 4.38-1.815l57.828-57.826a6.205 6.205 0 0 0 1.78-4.37 6.198 6.198 0 0 0-10.542-4.392L88.843 82.398a6.01 6.01 0 0 0-.322.298L64 107.214 39.478 82.696a6.236 6.236 0 0 0-.32-.297Zm56.898-41.58-30.6 44.244a2.635 2.635 0 0 1-4.339-.007 2.607 2.607 0 0 1-.451-1.601l1.225-24.428-19.772-4.192a2.628 2.628 0 0 1-1.891-1.59 2.603 2.603 0 0 1 .278-2.451l30.6-44.244a2.632 2.632 0 0 1 3.009-.998 2.621 2.621 0 0 1 1.33 1.005c.322.47.48 1.032.451 1.601l-1.224 24.428 19.77 4.192c.423.09.817.282 1.147.56a2.605 2.605 0 0 1 .467 3.48z"
      />
    </svg>
  );
}

Vitest.defaultProps = {
  className: '',
  size: 64,
};

Vitest.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Vitest;
