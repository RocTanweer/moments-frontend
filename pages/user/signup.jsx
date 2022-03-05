// hooks
import { useFormik } from "formik";
// from nextjs
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
// icons/assets
import { FcGoogle } from "react-icons/fc";
import moments from "../../assets/moments.png";
// components
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

import { API } from "../_app";

const handleFormSubmit = async ({ Email, Fullname, Username, Password }) => {
  try {
    const {
      data: { user },
    } = await API.post("/auth/local/register", {
      email: Email,
      Fullname: Fullname,
      username: Username,
      password: Password,
    });
    console.log(user);
    Router.replace("/user/login");
  } catch (err) {
    console.error(err);
  }
};

function Signup() {
  const formik = useFormik({
    initialValues: {
      Email: "",
      Fullname: "",
      Username: "",
      Password: "",
    },
    onSubmit: handleFormSubmit,
  });

  return (
    <div className="h-full flex justify-center items-center bg-slate-100">
      <div className="flex justify-center px-8 item-center max-w-[935px] w-full gap-2">
        {/* ANY ADDITIONAL ILLUSTRATION CAN GO HERE */}

        <div className="flex flex-col grow-0 shrink basis-[400px] self-center  bg-white rounded-sm p-5 shadow-md">
          <div className="flex flex-row justify-center item-center mb-4">
            <div className="w-32">
              <Image src={moments} alt="logo" className="object-cover" />
            </div>
          </div>

          <form className="w-full mb-3" onSubmit={formik.handleSubmit}>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="email" name="Email" handleChange={formik.handleChange} value={formik.values.Email} />
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="text" name="Fullname" handleChange={formik.handleChange} value={formik.values.Fullname} />
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="text" name="Username" handleChange={formik.handleChange} value={formik.values.Username} />
            </div>
            <div className="flex justify-center item-center gap-2 p-2">
              {/* ICON GOES HERE IF ANY */}
              <Input type="password" name="Password" handleChange={formik.handleChange} value={formik.values.Password} />
            </div>

            <Button block type="submit">
              sign up
            </Button>
          </form>

          <div className="mb-3">
            <p className="font-light from-neutral-300 text-xs">
              Already have account?{" "}
              <Link href={"/user/login"}>
                <a className="text-blue-800 underline font-semibold">login</a>
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

export default Signup;
