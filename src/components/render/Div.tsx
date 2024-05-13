export const Div = ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  );
};
