import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MyForm = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Your Full Name is Required!"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="flex gap-2 container mx-auto justify-center content-center mt-2">
        {/* Forms */}
        <div>
          <form className="p-2" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name..."
              {...register("fullname")}
            />

            <br />
            <input
              type="text"
              placeholder="Email..."
              className="mt-1"
              {...register("email")}
            />
            <br />
            <input
              type="number"
              placeholder="Age..."
              className="mt-1"
              {...register("age")}
            />
            <br />
            <input
              type="password"
              placeholder="Password..."
              className="mt-1"
              {...register("password")}
            />
            <br />
            <input
              type="password"
              placeholder="Confirm Password..."
              className="mt-1"
              {...register("confirmPassword")}
            />
            <br />
            <input
              type="submit"
              className="mt-2 font-semibold text-white but-blue"
            />
          </form>
        </div>
        {/* Errors */}
        <div className="p-2">
          <span className="text-sm font-semibold text-pink-600">
            {errors.fullname?.message}
            <br />
            {errors.email?.message}
            <br />
            {errors.age?.message}
            <br />
            {errors.password?.message}
            <br />
            {errors.confirmPassword?.message}
          </span>
        </div>
      </div>
    </>
  );
};

export default MyForm;
