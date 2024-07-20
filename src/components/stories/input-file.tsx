"use client";

import React, { useRef, useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const style = tv({
  slots: {
    base: "h-10 flex w-full items-center gap-2 overflow-hidden rounded-md border-2 border-[#2e2d33] bg-[#fef4ce] [box-shadow:5px_5px_#2e2d33] px-3 py-2 text-sm ring-offset-background active:outline-blue-900",
    button:
      "border-r p-1.5 font-semibold text-[#fef4ce] bg-[#2e2d33] rounded-md",
  },
});

type TInputFile = VariantProps<typeof style>;
interface Props extends TInputFile, React.ComponentPropsWithRef<"input"> {}

export const InputFile = (props: Props) => {
  const [files, setFiles] = useState<FileList | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={style.slots.base}>
      <button
        type="button"
        className={style.slots.button}
        onClick={() => inputRef.current?.click()}
      >
        Choose File
      </button>
      <input
        {...props}
        ref={inputRef}
        hidden
        type="file"
        onChange={(e) => {
          setFiles(e.target.files);
          props.onChange?.(e);
        }}
      />
      {files ? (
        <div>You choose {files.length} file</div>
      ) : (
        <div>{props.placeholder}</div>
      )}
    </div>
  );
};
