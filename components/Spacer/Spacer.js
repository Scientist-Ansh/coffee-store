import React from 'react';

export const Spacer = ({ size, axis, style = {}, id }) => {
  const width = axis === 'vertical' ? 1 : size;
  const height = axis === 'horizontal' ? 1 : size;
  return (
    <span
      id={id ? id : ''}
      style={{
        display: 'block',
        width,
        minWidth: width,
        height,
        minHeight: height,
        ...style,
      }}
    />
  );
};
