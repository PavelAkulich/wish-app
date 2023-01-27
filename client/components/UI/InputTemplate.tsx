import * as React from "react";
import InputUnstyled, {
  InputUnstyledProps,
  InputUnstyledOwnerState,
} from "@mui/base/InputUnstyled";

const InputTemplate = React.forwardRef(function Button(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      slotProps={{
        input: (state: InputUnstyledOwnerState) => ({
          className: `p-1 rounded w-full outline-none ${
            state.disabled ? "" : ""
          }`,
        }),
        root: (state: InputUnstyledOwnerState) => ({
          className: `w-full relative p-0 rounded border flex transition-all hover:border-solid hover:border-default-light ${
            state.focused ? "outline-1 outline outline-default" : ""
          }`,
        }),
      }}
      ref={ref}
      {...props}
    />
  );
});

export default InputTemplate;
