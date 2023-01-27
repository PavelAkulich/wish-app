import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledOwnerState,
  ButtonUnstyledProps,
} from "@mui/base/ButtonUnstyled";

const ButtonTemplate = React.forwardRef(function Button(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <ButtonUnstyled
      slotProps={{
        root: (state: ButtonUnstyledOwnerState) => ({
          className: `border font-bold rounded border-solid border-transparent text-[18px] hover:opacity-80 transition-all ${
            state.disabled ? "opacity-50 cursor-not-allowed" : ""
          }  ${state.focusVisible ? "outline-1 outline outline-default" : ""}`,
        }),
      }}
      {...props}
      ref={ref}
    />
  );
});

export default ButtonTemplate;
