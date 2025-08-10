import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: "primary"|"ghost";
  asChild?: boolean;
};
export function Button({ variant="primary", className="", asChild, ...rest }: Props) {
  const base = "rounded-xl px-5 py-3 text-sm font-medium transition";
  const map = {
    primary: "bg-blueA hover:bg-blueB text-white shadow-card",
    ghost: "bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white"
  };
  
  if (asChild) {
    return React.cloneElement(rest.children as React.ReactElement, {
      className: `${base} ${map[variant]} ${className}`,
      ...rest
    });
  }
  
  return <button className={`${base} ${map[variant]} ${className}`} {...rest} />;
}
