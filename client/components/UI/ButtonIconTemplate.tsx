import * as React from "react";
import ButtonUnstyled, {
  ButtonUnstyledOwnerState,
  ButtonUnstyledProps,
} from "@mui/base/ButtonUnstyled";

const ButtonIconTemplate = React.forwardRef(function Button(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <ButtonUnstyled
      slotProps={{
        root: (state: ButtonUnstyledOwnerState) => ({
          className: `w-[37px] h-[37px] text-default rounded-full bg-white text-[18px] transition-all ${
            state.disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-default-graydark"
          } ${state.focusVisible ? "outline-1 outline outline-default" : ""}`,
        }),
      }}
      {...props}
      ref={ref}
    />
  );
});

export default ButtonIconTemplate;
