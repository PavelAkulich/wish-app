import * as React from "react";
import TabsUnstyled, { TabsUnstyledProps } from "@mui/base/TabsUnstyled";
import TabsListUnstyled, {
  TabsListUnstyledProps,
} from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled, {
  TabPanelUnstyledProps,
} from "@mui/base/TabPanelUnstyled";
import TabUnstyled, {
  TabUnstyledProps,
  TabUnstyledOwnerState,
} from "@mui/base/TabUnstyled";

export const TabsTemplate = React.forwardRef(function CustomSelect(
  props: TabsUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return (
    <TabsUnstyled
      {...props}
      ref={ref}
      slotProps={{
        root: {
          className: `h-full w-full flex flex-col gap-2`,
        },
      }}
    />
  );
});

export const TabsListTemplate = React.forwardRef(function CustomSelect(
  props: TabsListUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return (
    <TabsListUnstyled
      {...props}
      ref={ref}
      slotProps={{
        root: {
          className: `h-[35px] w-full flex gap-2`,
        },
      }}
    />
  );
});

export const TabTemplate = React.forwardRef(function CustomSelect(
  props: TabUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return (
    <TabUnstyled
      {...props}
      ref={ref}
      slotProps={{
        root: (state: TabUnstyledOwnerState) => ({
          className: `min-w-[100px] px-1 pb-1 rounded-t-lg border-solid border-b transition-all duration-300 hover:bg-default/10 ${
            state.selected ? "border-default" : ""
          }`,
        }),
      }}
    />
  );
});

export const TabPanelTemplate = React.forwardRef(function CustomSelect(
  props: TabPanelUnstyledProps,
  ref: React.ForwardedRef<any>
) {
  return (
    <TabPanelUnstyled
      {...props}
      ref={ref}
      slotProps={{
        root: {
          className: `h-[calc(100%-45px)]`,
        },
      }}
    />
  );
});
