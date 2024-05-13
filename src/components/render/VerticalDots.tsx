import { BiDotsVerticalRounded } from 'react-icons/bi';

export const VerticalDots = ({ className, style, id }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;

}) =>{
  return (
    <BiDotsVerticalRounded id={id} className={className} style={style} />
  );
} 