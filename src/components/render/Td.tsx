import React from 'react'

export const Td =  ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <td id={id} className={className} style={style}>
      {children}
    </td>
  );
}
