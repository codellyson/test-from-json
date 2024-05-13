export const P = ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <p id={id} className={className} style={style}>
      {children}
    </p>
  );
};
