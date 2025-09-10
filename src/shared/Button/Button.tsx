import cn from "classnames";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}
export const Button = ({ className, children, ...rest }: Props) => {
  return (
    <button className={cn(className, "button")} {...rest}>
      {children}
    </button>
  );
};
