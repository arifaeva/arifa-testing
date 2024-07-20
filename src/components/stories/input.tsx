import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

// 1. attribute size native harus dihapus
// 2. baru masukin size extended

const style = tv({
  base: "w-full rounded-md border-2 border-[#2e2d33] bg-[#fef4ce] [box-shadow:5px_5px_#2e2d33] px-3 py-2 text-sm ring-offset-background outline-[#2e2d33] file:border-0 placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    size: {
      sm: "h-10",
      md: "h-24",
      lg: "h-32",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type TInput = VariantProps<typeof style>;

interface Props
  extends TInput,
    Omit<React.ComponentPropsWithRef<"input">, "size"> {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
}

export const Input = (props: Props) => {
  return (
    <input
      {...props}
      size={undefined}
      className={twMerge(style({ ...props }), props.className)}
    />
  );
};
