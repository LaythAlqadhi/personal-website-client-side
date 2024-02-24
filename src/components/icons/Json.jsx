import React from 'react';
import PropTypes from 'prop-types';

function Json({ className, size }) {
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
        d="M45.949 63.71c0 22.998 17.853 30.038 18.223 30.175l.016.005a.823.823 0 0 0-.05.021h-.001v.001h.001c20.306 6.899 40.668-10.261 40.668-41.251 0-17.054-7.595-37.361-27.7-48.894C105.528 10.083 126 34.393 126 63.903c0 35.822-30.182 62.003-61.873 62.003-2.078 0-37.078-10.935-37.216-51.164-.103-30.18 19.208-40.406 32.72-38.442.009.003-13.682 7.806-13.682 27.41z"
      />
      <path
        className={className}
        fillRule="evenodd"
        d="M82.051 64.29c0-22.998-17.853-30.038-18.223-30.175l-.016-.005a.823.823 0 0 0 .05-.021h.001v-.001h-.001C43.556 27.19 23.193 44.35 23.193 75.34c0 17.054 7.595 37.361 27.7 48.894C22.472 117.917 2 93.607 2 64.097 2 28.275 32.182 2.094 63.873 2.094c2.078 0 37.078 10.935 37.216 51.164.103 30.18-19.207 40.406-32.72 38.443-.009-.004 13.682-7.807 13.682-27.411z"
        clipRule="evenodd"
      />
    </svg>
  );
}

Json.defaultProps = {
  className: '',
  size: 64,
};

Json.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Json;
