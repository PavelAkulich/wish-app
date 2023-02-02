import { ReactNode, useState } from "react";
import PopperUnstyled, { PopperPlacementType } from "@mui/base/PopperUnstyled";

function TooltipTemplate({
  children,
  text,
  classNameTooltip,
  placement,
}: {
  children: ReactNode;
  text: string;
  classNameTooltip?: string;
  placement?: PopperPlacementType;
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
    <div className="group relative">
      <div onMouseEnter={handleClick} onMouseLeave={() => setAnchorEl(null)}>
        {children}
      </div>
      <PopperUnstyled
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement={placement ? placement : "bottom"}
        className={`z-20 ${classNameTooltip}`}
      >
        <div
          className={`box-border text-white shadow-md bg-default-gradientDark rounded z-20 py-1 px-3 m-1 text-[10px] ${classNameTooltip}`}
        >
          {text}
        </div>
      </PopperUnstyled>
    </div>
  );
}

export default TooltipTemplate;
