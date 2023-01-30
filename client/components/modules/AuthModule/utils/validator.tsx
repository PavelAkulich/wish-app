import * as yup from "yup";

export const validationSchemaLogin = yup.object({
  email: yup
    .string()
    .required("Введите E-mail").email("Введите E-mail"),
  password: yup.string().required("Введите пароль"),
});

export const validationSchemaRegister = yup.object({
  email: yup
    .string()
    .required("Введите E-mail").email("Введите E-mail"),
  password: yup.string().required("Введите пароль"),
  fullName: yup.string().required("Введите имя"),
});
