import { FC } from "react";
import { IWishResponse } from "@/types/WishListTypes";
import DefaultContainer from "@/components/UI/DefaultContainer";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
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
  const revoke = () => {
    router.replace(`/wish-list/${wishItem._id}`);
  };

  const formik = useFormik({
    initialValues: {
      name: wishItem.name || "",
      avatarUrl: wishItem.avatarUrl || "",
      description: wishItem.description || "",
    },
    validationSchema: validationSchemaWish,
    onSubmit: async (values) => {
      try {
        await Api().wish.updateWishItem(values, wishItem._id);
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
          </div>
          <DefaultButtonSection handleClose={revoke} />
        </form>
      </DefaultContainer>
    </div>
  );
};

export default WishItemEditModule;
