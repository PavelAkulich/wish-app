import * as yup from "yup";

export const validationSchemaWish = yup.object({
  name: yup.string().required("Введите название"),
  description: yup.string(),
});
