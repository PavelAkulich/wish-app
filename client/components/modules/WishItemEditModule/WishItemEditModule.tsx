import { FC, useState, useRef, ChangeEvent } from "react";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultContainer from "@/components/UI/DefaultContainer";
import DefaultFormInput from "@/components/components/DefaultFormInput";
import { wishFormInput } from "./utils/wishEdit.constants";
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
        const newWish = Object.keys(values).reduce((acc, key) => {
          console.log(key, values[key as keyof typeof values]);
          acc.append(key, values[key as keyof typeof values]);
          return acc;
        }, formData);
        const res = await Api().wish.createWishItem(newWish);
      } catch (err) {
        console.log(err);
      } finally {
        revoke();
      }
    },
  });

  return (
    <div className="h-full">
      <DefaultContainer
        classNameOuterContainer="text-default w-full h-full"
        classNameInnerContainer="h-full bg-default-bg border border-solid border-default grid grid-rows-[50px_1fr_50px] py-10"
      >
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
                    ? `${
                        formik.errors[item.name as keyof typeof formik.values]
                      }`
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
          <DefaultButtonSection handleClose={revoke} />
        </form>
      </DefaultContainer>
    </div>
  );
};

export default WishItemEditModule;
