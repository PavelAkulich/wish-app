import { FC } from "react";
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
  const formik = useFormik({
    initialValues: {
      name: "",
      avatarUrl: "",
      description: "",
    },
    validationSchema: validationSchemaWish,
    onSubmit: async (values) => {
      try {
        const res = await Api().wish.createWishItem(values);
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
        </div>
        <DefaultButtonSection handleClose={closeMethod} />
      </form>
    </div>
  );
};

export default WishListModal;
