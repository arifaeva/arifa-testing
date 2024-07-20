import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "disabled:opacity-50 font-medium tracking-tight rounded-lg px-4 py-2 border-2 border-[#2e2d33] text-[#2e2d33] transition-all duration-100 [box-shadow:5px_5px_#2e2d33] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_#2e2d33]",
  variants: {
    variant: {
      primary: "bg-[#2e2d33] text-[#fef4ce] border-[#fef4ce]",
      secondary: "bg-[#9ccb9a] text-[#2e2d33]",
      tertiary: "bg-[#e75c45] text-[#2e2d33]",
      quartenary: "bg-[#fef4ce] text-[#2e2d33]",
    },
    size: {
      sm: "px-2.5 py-1.5 text-sm",
      md: "px-3.5 py-2.5 text-base",
      lg: "px-5 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});

type TButton = VariantProps<typeof style>;

interface Props extends TButton, React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  return (
    <button
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </button>
  );
};
