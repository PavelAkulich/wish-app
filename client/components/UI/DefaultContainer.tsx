import { ReactNode } from "react";
function DefaultContainer({
  children,
  classNameOuterContainer,
  classNameInnerContainer,
}: {
  children: ReactNode;
  classNameOuterContainer?: string;
  classNameInnerContainer?: string;
}) {
  return (
    <div className={`w-full p-4 box-border ${classNameOuterContainer}`}>
      <div
        className={`w-full rounded-md p-4 ${classNameInnerContainer}`}
      >
        {children}
      </div>
    </div>
  );
}

export default DefaultContainer;
