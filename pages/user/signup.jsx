import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import moments from "../../assets/moments.png";
import Button from "../../components/button/Button";

import Input from "../../components/input/Input";

function Signup() {
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

          <form className="w-full mb-3">
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="email" name="Email" />
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="text" name="Full Name" />
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <Input type="text" name="Username" />
            </div>
            <div className="flex justify-center item-center gap-2 p-2">
              {/* ICON GOES HERE IF ANY */}
              <Input type="password" name="Password" />
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
