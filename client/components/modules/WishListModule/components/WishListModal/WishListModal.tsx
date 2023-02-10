import { FC, useRef, useState, ChangeEvent } from "react";
import { validationSchemaWish } from "./../../utils/validator";
import { useFormik } from "formik";
import { Api } from "@/api/defaultApi";
import { wishFormInput } from "../../utils/wishListModal.constants";
import DefaultFormInput from "@/components/components/DefaultFormInput";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultButtonSection from "./../../../../components/DefaultButtonSection";

type WishListModalProps = {
  closeMethod: () => void;
  successMethod: (item: IWishResponse) => void;
};
const WishListModal: FC<WishListModalProps> = ({
  closeMethod,
  successMethod,
}) => {
  const [file, setFile] = useState<File>();
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
        console.log(formData);
        const newWish = Object.keys(values).reduce((acc, key) => {
          console.log(key, values[key as keyof typeof values])
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
          {wishFormInput.map((item) => (
            <DefaultFormInput
              key={item.name}
              labelText={item.label}
              type={item.type}
              name={item.name}
              errorText={
                formik.errors[item.name as keyof typeof formik.values] &&
                formik.touched[item.name as keyof typeof formik.values]
                  ? `${formik.errors[item.name as keyof typeof formik.values]}`
                  : ""
              }
              value={formik.values[item.name as keyof typeof formik.values]}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          ))}
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
        <DefaultButtonSection handleClose={closeMethod} />
      </form>
    </div>
  );
};

export default WishListModal;
