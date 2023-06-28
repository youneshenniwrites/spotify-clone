import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export const Box = ({ children, className }: BoxProps) => {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
};
