import * as React from "react";
import ModalUnstyled, {
  ModalUnstyledOwnerState,
  ModalUnstyledProps,
} from "@mui/base/ModalUnstyled";

const BackdropUnstyled = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className="z-[-1] fixed right-0 left-0 top-0 bottom-0"
      ref={ref}
      {...other}
    />
  );
});

const ModalTemplate = React.forwardRef(function Button(
  props: ModalUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <ModalUnstyled
      slotProps={{
        root: (state: ModalUnstyledOwnerState) => ({
          className: `fixed z-[1300] right-0 left-0 top-0 bottom-0 flex items-center justify-center bg-black/50`,
        }),
      }}
      slots={{ backdrop: BackdropUnstyled }}
      ref={ref}
      {...props}
    />
  );
});

export default ModalTemplate;
