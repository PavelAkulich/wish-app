import { useState, useEffect } from "react";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import ButtonIconTemplate from "./ButtonIconTemplate";
import TooltipTemplate from "./TooltipTemplate";

function PopperTemplate({
  children,
  icon,
  classNameButton,
  classNamePopper,
  tooltipText,
  tooltipClass,
  close,
}: {
  children: JSX.Element | React.ReactNode;
  icon: JSX.Element | React.ReactNode;
  classNameButton?: string;
  classNamePopper?: string;
  tooltipText?: string;
  tooltipClass?: string;
  close?: boolean;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <span>
        {tooltipText ? (
          <TooltipTemplate text={tooltipText} classNameTooltip={tooltipClass}>
            <ButtonIconTemplate
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              className={`w-auto h-auto px-0 py-0 border-0 hover:border-0 border-transparent hover:opacity-100 bg-transparent ${classNameButton}`}
            >
              {icon}
            </ButtonIconTemplate>
          </TooltipTemplate>
        ) : (
          <ButtonIconTemplate
            aria-describedby={id}
            type="button"
            onClick={handleClick}
            className={`w-auto h-auto px-0 py-0 border-0 hover:border-0 border-transparent hover:opacity-100 bg-transparent ${classNameButton}`}
          >
            {icon}
          </ButtonIconTemplate>
        )}

        <PopperUnstyled
          id={id}
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
          className="z-20"
        >
          <div
            onKeyDown={(e) => {
              if (close && (e.code === "Enter" || e.code === "NumpadEnter"))
                setAnchorEl(null);
            }}
            className={`rounded bg-white box-border p-2 border border-solid border-default-graydark shadow-md ${classNamePopper}`}
          >
            {children}
          </div>
        </PopperUnstyled>
      </span>
    </ClickAwayListener>
  );
}

export default PopperTemplate;
