import * as React from "react";
import { tokens } from "./tokens";

const base = "rounded-xl px-5 py-3 text-sm font-medium transition";
const map = {
  primary: `bg-[${tokens.color.blueA}] hover:bg-[${tokens.color.blueB}] text-white shadow-card`,
  ghost: "bg-white/5 ring-1 ring-white/10 hover:bg-white/10 text-white"
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof map;
}

export function Button({ variant = "primary", className = "", ...rest }: ButtonProps) {
  if (className) {
    className = `${base} ${map[variant]} ${className}`;
  } else {
    className = `${base} ${map[variant]}`;
  }

  return <button className={className} {...rest} />;
}
