"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  base: "h-24 w-full border-2 border-[#2e2d33] bg-[#fef4ce] [box-shadow:5px_5px_#2e2d33] rounded-md px-3 py-2 text-sm ring-offset-background active:outline-blue-900 placeholder:text-muted-foreground focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
});

type TTextarea = VariantProps<typeof style>;
interface Props extends TTextarea, React.ComponentPropsWithRef<"textarea"> {}

export const Textarea = (props: Props) => {
  return (
    <textarea
      {...props}
      className={twMerge(style({ ...props }), props.className)}
    >
      {props.children}
    </textarea>
  );
};
