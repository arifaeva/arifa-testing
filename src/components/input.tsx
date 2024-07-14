import React from "react";

// 1. attribute size native harus dihapus
// 2. baru masukin size extended

interface Props extends Omit<React.ComponentPropsWithRef<"input">, "size"> {
  size: "sm" | "md" | "lg";
}

export const Input = (props: Props) => {
  return <input />;
};

// import React from "react";

// interface Props
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
//   size: "sm" | "md" | "lg";
// }

// export const Input = ({ size, ...rest }: Props) => {
//   return <input {...rest} />;
// };
