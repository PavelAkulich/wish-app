import * as React from "react";
import SelectUnstyled, {
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
  SelectUnstyledOwnerState,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  OptionUnstyledProps,
  OptionUnstyledOwnerState,
} from "@mui/base/OptionUnstyled";
// import UnfoldMoreRoundedIcon from "@mui/icons-material/UnfoldMoreRounded";

const Button = React.forwardRef(function Button<TValue extends {}>(
  props: SelectUnstyledRootSlotProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      {/* {ownerState.open ? <UnfoldMoreRoundedIcon /> : <UnfoldMoreRoundedIcon />} */}
    </button>
  );
});

export const SelectTemplate = React.forwardRef(function CustomSelect<
  TValue extends {}
>(
  props: SelectUnstyledProps<TValue>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <div className="relative">
      <SelectUnstyled
        {...props}
        ref={ref}
        slots={{
          root: Button,
        }}
        slotProps={{
          root: (state: SelectUnstyledOwnerState<any>) => ({
            className: `box-border relative min-h-[calc(1.5em + 22px)] rounded w-full p-1 border text-left hover:border-default-light ${
              state.open || state.focusVisible
                ? "outline-1 outline outline-default"
                : ""
            } transition-all [&>svg]:absolute [&>svg]:h-full [&>svg]:top-0 [&>svg]:right-[5px]`,
          }),
          popper: (state: SelectUnstyledOwnerState<any>) => ({
            className: `z-20 bg-white min-w-full rounded box-border border shadow-md`,
          }),
          listbox: (state: SelectUnstyledOwnerState<any>) => ({
            className: `w-full box-border py-1`,
          }),
        }}
      />
    </div>
  );
});

export const OptionTemplate = React.forwardRef(function CustomSelect<
  TValue extends {}
>(props: OptionUnstyledProps<TValue>, ref: React.ForwardedRef<any>) {
  return (
    <OptionUnstyled
      {...props}
      ref={ref}
      slotProps={{
        root: (state: OptionUnstyledOwnerState<any>) => ({
          className: `box-border w-full cursor-pointer p-1 my-1 text-left hover:bg-default-graydark 
          ${state.highlighted && !state.selected ? "bg-default-bg" : ""} ${
            state.selected ? "bg-default-light" : ""
          } transition-all [&>svg]:absolute [&>svg]:h-full [&>svg]:top-0 [&>svg]:right-[5px]`,
        }),
      }}
    />
  );
});
