// Icon.js
import React from 'react';

const Icon = ({ id, className, ...props }) => (
  <svg className={className} {...props}>
    <use xlinkHref={`#${id}`} />
  </svg>
);

export default Icon;
