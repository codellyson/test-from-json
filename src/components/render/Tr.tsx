import React from 'react'

export const Tr =  ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <tr id={id} className={className} style={style}>
      {children}
    </tr>
  );
}
