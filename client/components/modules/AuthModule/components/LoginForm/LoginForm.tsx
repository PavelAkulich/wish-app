import ButtonTemplate from "@/components/UI/ButtonTemplate";
import InputTemplate from "@/components/UI/InputTemplate";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import { useLoginUserMutation } from "../../store/userService";
import { setUser } from "../../store/userSlice";
import { validationSchemaLogin } from "./../../utils/validator";

function LoginForm() {
  const [login, loginData] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      const data = await login(values);
      // dispatch(
      //   setUser({
      //     _id: data._id,
      //     fullName: data.fullName,
      //     email: data.email,
      //     avatarUrl: data.avatarUrl,
      //     description: data.description,
      //   })
      // );
      console.log(data);
    },
  });
  return (
    <div>
      <div>Login</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div className="py-2">
            <label htmlFor="email">E-mail</label>
            <InputTemplate
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="h-4 text-red-500 text-xs">
              {formik.errors.email && formik.touched.email
                ? `${formik.errors.email}`
                : ""}
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="password">Пароль</label>
            <InputTemplate
              name="password"
              id="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className="h-4 text-red-500 text-xs">
              {formik.errors.password && formik.touched.password
                ? `${formik.errors.password}`
                : ""}
            </div>
          </div>
        </div>
        <div>
          <ButtonTemplate type="submit">Войти</ButtonTemplate>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
