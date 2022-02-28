import { useFormik } from "formik";

function Signup() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => console.log(JSON.stringify(values, null, 2)),
  });

  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="flex flex-col  w-[472px] h-[500px] border-2 rounded p-8">
        <div className="text-center mb-4">
          <h1 className="text-5xl text-pink-500 font-bold">moments</h1>
        </div>

        <form className="flex flex-col w-full" onSubmit={formik.handleSubmit}>
          <lable htmlFor="userName" className="text-4 font-semibold">
            UserName
          </lable>
          <input type="text" name="userName" id="userName" autoComplete="off" onChange={formik.handleChange} value={formik.values.userName} />

          <lable htmlFor="email" className="text-4 font-semibold">
            Email
          </lable>
          <input type="email" name="email" id="email" autoComplete="off" onChange={formik.handleChange} value={formik.values.email} />

          <lable htmlFor="password" className="text-4 font-semibold">
            Password
          </lable>
          <input type="password" name="password" id="password" autoComplete="off" onChange={formik.handleChange} value={formik.values.password} />
          <lable htmlFor="confirmPassword" className="text-4 font-semibold">
            Confirm Password
          </lable>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
          />
          <button type="submit" className="bg-blue-500">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
