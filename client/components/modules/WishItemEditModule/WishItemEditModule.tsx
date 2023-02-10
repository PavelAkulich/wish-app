import { FC, useState, useRef, ChangeEvent } from "react";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultContainer from "@/components/UI/DefaultContainer";
import DefaultFormInput from "@/components/components/DefaultFormInput";
import DefaultButtonSection from "@/components/components/DefaultButtonSection";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { validationSchemaWish } from "./utils/validator";
import { Api } from "@/api/defaultApi";

type WishItemEditModuleProps = {
  wishItem: IWishResponse;
};

const WishItemEditModule: FC<WishItemEditModuleProps> = ({ wishItem }) => {
  const router = useRouter();
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

  const revoke = () => {
    router.replace(`/wish-list/${wishItem._id}`);
  };

  const formik = useFormik({
    initialValues: {
      name: wishItem.name || "",
      description: wishItem.description || "",
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
        const res = await Api().wish.updateWishItem(newWish, wishItem._id);
      } catch (err) {
        console.log(err);
      } finally {
        revoke();
      }
    },
  });
  console.log(wishItem.avatarUrl);
  return (
    <div className="h-full">
      <DefaultContainer
        classNameOuterContainer="text-default w-full h-full"
        classNameInnerContainer="h-full bg-default-bg border border-solid border-default grid grid-rows-[50px_1fr_50px] py-10"
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <DefaultFormInput
              key={"name"}
              labelText="Название"
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
            <DefaultFormInput
              key={"description"}
              labelText="Описание"
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
                Видно всем
              </label>
            </div>
            <button onClick={handleUploadClick} type="button">
              {file ? `${file.name}` : "Click to select"}
            </button>
            <input
              type="file"
              accept="image/*"
              ref={refImage}
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <DefaultButtonSection handleClose={revoke} />
        </form>
      </DefaultContainer>
    </div>
  );
};

export default WishItemEditModule;
