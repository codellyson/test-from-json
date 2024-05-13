import React from 'react'

export const Table = ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <table id={id} className={className} style={style}>
      {children}
    </table>
  );
}