import React from 'react'

export const Img = ({ className, style, id, src, alt }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  src: string;
  alt: string;
}) => {
   
  return (
    <img id={id} className={className} style={style} src={src} alt={alt} />
  );
}
