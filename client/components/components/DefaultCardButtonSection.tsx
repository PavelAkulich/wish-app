import { FC } from "react";
import ButtonTemplate from "../UI/ButtonTemplate";

type DefaultCardButtonSectionProps = {
  handleView: () => void;
  handleUpdate: () => void;
  handleDelete: () => void;
  labelView?: string;
  labelUpdate?: string;
  labelDelete?: string;
};
const DefaultCardButtonSection: FC<DefaultCardButtonSectionProps> = ({
  handleView,
  handleUpdate,
  handleDelete,
  labelView = "Смотреть",
  labelUpdate = "Изменить",
  labelDelete = "Удалить",
}) => {
  return (
    <div className="mt-2 p-2 flex justify-between">
      <ButtonTemplate onClick={handleView}>{labelView}</ButtonTemplate>
      <ButtonTemplate onClick={handleUpdate}>{labelUpdate}</ButtonTemplate>
      <ButtonTemplate onClick={handleDelete}>{labelDelete}</ButtonTemplate>
    </div>
  );
};

export default DefaultCardButtonSection;
