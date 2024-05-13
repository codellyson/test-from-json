import React from 'react'

export const Th =  ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <th id={id} className={className} style={style}>
      {children}
    </th>
  );
}
