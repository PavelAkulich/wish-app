import { ChangeEventHandler, FC, FocusEventHandler } from "react";
import InputTemplate from "@/components/UI/InputTemplate";

type DefaultFormInputProps = {
  labelText: string;
  errorText: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<Element>;
  name: string;
  type: string;
};
const DefaultFormInput: FC<DefaultFormInputProps> = ({
  labelText,
  errorText,
  value,
  handleChange,
  handleBlur,
  name,
  type,
}) => {
  return (
    <div className="py-2">
      <label htmlFor={name}>{labelText}</label>
      <InputTemplate
        name={name}
        id={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={errorText ? 'border-red-500' : ''}
      />
      <div className="h-2 text-red-500 text-xs">
        {errorText ? `${errorText}` : ""}
      </div>
    </div>
  );
};

export default DefaultFormInput;
