export const Button = ({ className, style, id, children }:{
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  children: React.ReactNode;

}) => {
  return (
    <button id={id} className={className} style={style}>
      {children}
    </button>
  );
};
