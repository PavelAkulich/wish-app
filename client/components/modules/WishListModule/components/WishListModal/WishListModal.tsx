import { FC, useRef, useState, ChangeEvent } from "react";
import { validationSchemaWish } from "./../../utils/validator";
import { useFormik } from "formik";
import { Api } from "@/api/defaultApi";
import DefaultFormInput from "@/components/components/DefaultFormInput";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultButtonSection from "@/components/components/DefaultButtonSection";
import ButtonTemplate from "@/components/UI/ButtonTemplate";

type WishListModalProps = {
  closeMethod: () => void;
  successMethod: (item: IWishResponse) => void;
};
const WishListModal: FC<WishListModalProps> = ({
  closeMethod,
  successMethod,
}) => {
  const [file, setFile] = useState<File>();
  const [global, setGlobal] = useState<boolean>(false);
  const refImage = useRef<HTMLInputElement | null>(null);
  const handleUploadClick = () => {
    refImage.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setFile(e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    validationSchema: validationSchemaWish,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        if (file) formData.append("avatarUrl", file);
        if (global) formData.append("global", "true");
        const newWish = Object.keys(values).reduce((acc, key) => {
          console.log(key, values[key as keyof typeof values]);
          acc.append(key, values[key as keyof typeof values]);
          return acc;
        }, formData);
        const res = await Api().wish.createWishItem(newWish);
        successMethod(res);
      } catch (err) {
        console.log(err);
      } finally {
        closeMethod();
      }
    },
  });
  return (
    <div className="px-10 py-5 bg-default-bg rounded-md border border-default min-w-[400px]">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="flex justify-between">
            <div className="font-bold text-xl">?????????? ????????????</div>
            <div>
              <input
                type="checkbox"
                value="0"
                checked={global}
                name={`global`}
                onChange={() => {
                  console.log("checkbox");
                  console.log(global);
                  setGlobal((prev) => !prev);
                  console.log(global);
                }}
                id={`global`}
                className="hidden"
              />
              <label
                htmlFor={`global`}
                className={`w-full px-1 text-center rounded cursor-pointer ${
                  global
                    ? "border border-solid border-default bg-default/10 "
                    : "hover:bg-default/10 border border-solid border-transparent"
                }`}
              >
                ?????????? ????????
              </label>
            </div>
          </div>
          <DefaultFormInput
            key={"name"}
            labelText="????????????????"
            name={"name"}
            type="text"
            errorText={
              formik.errors.name && formik.touched.name
                ? `${formik.errors.name}`
                : ""
            }
            value={formik.values.name}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
          <ButtonTemplate onClick={handleUploadClick} type="button">
            {file ? `${file.name}` : "?????????????? ??????????????????????"}
          </ButtonTemplate>
          <input
            type="file"
            accept="image/*"
            ref={refImage}
            onChange={handleFileChange}
            className="hidden"
          />
          <DefaultFormInput
            key={"description"}
            labelText="????????????????"
            name={"description"}
            type="text"
            errorText={
              formik.errors.description && formik.touched.description
                ? `${formik.errors.description}`
                : ""
            }
            value={formik.values.description}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
          />
        </div>
        <DefaultButtonSection handleClose={closeMethod} />
      </form>
    </div>
  );
};

export default WishListModal;
