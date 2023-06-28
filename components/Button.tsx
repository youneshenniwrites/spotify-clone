type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return <div>{children}</div>;
};
