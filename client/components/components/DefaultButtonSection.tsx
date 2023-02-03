import { FC } from "react";
import ButtonTemplate from "../UI/ButtonTemplate";

type DefaultButtonSectionProps = {
  handleClose: () => void;
  labelSubmit?: string;
  labelClose?: string;
};
const DefaultButtonSection: FC<DefaultButtonSectionProps> = ({
  handleClose,
  labelSubmit = "Сохранить",
  labelClose = "Отменить",
}) => {
  return (
    <div className="p-2 flex justify-between">
      <ButtonTemplate type="submit">{labelSubmit}</ButtonTemplate>
      <ButtonTemplate onClick={handleClose}>{labelClose}</ButtonTemplate>
    </div>
  );
};

export default DefaultButtonSection;
