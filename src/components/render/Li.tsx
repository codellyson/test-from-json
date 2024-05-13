export const Li = ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <li id={id} className={className} style={style}>
      {children}
    </li>
  );
};
