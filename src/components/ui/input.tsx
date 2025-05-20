import * as React from "react";
import { cn } from "@/lib/utils";

// Union type based on `multiline` value
type InputProps =
  | ({
      multiline?: false;
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | ({
      multiline: true;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { multiline, className, ...rest } = props;

  const baseClassName = cn(
    "flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
    className
  );

  if (multiline) {
    // This cast is safe because props.multiline === true
    return (
      <textarea
        ref={ref as React.Ref<HTMLTextAreaElement>}
        className={baseClassName}
        {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      ref={ref as React.Ref<HTMLInputElement>}
      className={baseClassName}
      {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
});

Input.displayName = "Input";

export { Input };
