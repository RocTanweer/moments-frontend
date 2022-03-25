// hooks
import { useFormik } from "formik";
// from nextjs
import Image from "next/image";
import Link from "next/link";
// icons/assets
import signupImage from "../../assets/undraw_online_connection_6778.svg";
import { FcGoogle } from "react-icons/fc";
import moments from "../../assets/moments.png";
// components
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";

import { Button, Input } from "../../components";

import { API } from "../_app";

const handleFormSubmit = async ({ Username, Password }) => {
  try {
    const {
      data: { user },
    } = await API.post("/auth/local", {
      identifier: Username,
      password: Password,
    });
    console.log(user);
    alert(JSON.stringify(user, null, 2));
  } catch (err) {
    console.error(err);
  }
};

function Login() {
  const formik = useFormik({
    initialValues: {
      Username: "",
      Password: "",
    },
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="h-full flex justify-center items-center bg-slate-100">
      <div className="flex justify-center px-8 item-center max-w-[935px] w-full gap-2">
        <div className="flex-auto hidden lg:block">
          <Image src={signupImage} alt="signup illustration" />
        </div>
        <div className="flex flex-col grow-0 shrink basis-[400px] self-center  bg-white rounded-sm p-5 shadow-md">
          <div className="flex flex-row justify-center item-center mb-4">
            <div className="w-32">
              <Image src={moments} alt="logo" className="object-cover" />
            </div>
          </div>

          <form className="w-full mb-3" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="text" name="Username" handleChange={formik.handleChange} value={formik.values.Username} />
            </div>
            <div className="flex justify-center item-center gap-2 p-2">
              {/* ICON GOES HERE IF ANY */}
              <Input type="password" name="Password" handleChange={formik.handleChange} value={formik.values.Password} />
            </div>
            <Button block type="submit">
              log in
            </Button>
          </form>

          <div className="mb-3">
            <p className="font-light from-neutral-300 text-xs">
              Don't have an account?{" "}
              <Link href={"/user/signup"}>
                <a className="text-blue-800 underline font-semibold">Signup</a>
              </Link>
            </p>
          </div>

          <div className="text-center mb-3">
            <p>Or</p>
          </div>

          <div>
            <button className="flex justify-center items-center w-full bg-white py-1 px-6 rounded shadow-md hover:bg-gray-200 text-sm">
              <FcGoogle className="mr-2 h-5 w-5" /> log in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
