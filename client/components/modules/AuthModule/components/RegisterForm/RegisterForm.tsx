import ButtonTemplate from "@/components/UI/ButtonTemplate";
import InputTemplate from "@/components/UI/InputTemplate";
import { setToken } from "@/store/slices/errorSlice";
import { useAppDispatch } from "@/store/store";
import { useFormik } from "formik";
import { useRegisterUserMutation } from "../../store/userService";
import { setUser } from "../../store/userSlice";
import { validationSchemaRegister } from "./../../utils/validator";
import { registerFormInput } from "./registerForm.constants";
import DefaultFormInput from '@/components/components/DefaultFormInput';

function RegisterForm() {
  const [register, registerData] = useRegisterUserMutation();
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      avatarUrl: "",
      description: "",
      password: "",
    },
    validationSchema: validationSchemaRegister,
    onSubmit: async (values) => {
      await register(values)
        .unwrap()
        .then((res) => {
          console.log(res);
          dispatch(setUser(res));
          dispatch(setToken(res.token));
        });
    },
  });
  return (
    <div>
      <div>RegisterForm</div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          {registerFormInput.map((item) => (
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
        <div>
          <ButtonTemplate type="submit">Войти</ButtonTemplate>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
