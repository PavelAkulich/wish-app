import DefaultFormInput from "@/components/components/DefaultFormInput";
import ButtonTemplate from "@/components/UI/ButtonTemplate";
import { setToken } from "@/store/slices/errorSlice";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import { setCookie } from "nookies";
import { setUser } from "../../store/userSlice";
import { validationSchemaLogin } from "./../../utils/validator";
import { loginFormInput } from "./loginForm.constants";
import { Api } from "@/api/defaultApi";

function LoginForm() {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async (values) => {
      const res = await Api().user.loginUser(values);
      dispatch(setUser(res));
      dispatch(setToken(res.token));
      setCookie(null, "wishToken", res.token ? res.token.toString() : "", {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    },
  });
  return (
    <div>
      <div>Login</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {loginFormInput.map((item) => (
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
          {/* <div className="py-2">
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
            <label htmlFor="password">????????????</label>
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
          </div> */}
        </div>
        <div>
          <ButtonTemplate type="submit">??????????</ButtonTemplate>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
