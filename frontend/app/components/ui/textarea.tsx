import * as React from "react";
import { cn } from "@/utils/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "text-white resize-none flex min-h-[150px] flex h-10 w-full border-none bg-dark-gray dark:bg-dark-gray text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent \
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 \
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600\
           disabled:cursor-not-allowed disabled:opacity-50 \
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] \
           group-hover/input:shadow-none transition duration-400",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
