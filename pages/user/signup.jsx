import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import moments from "../../assets/moments.png";

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
              <div className="relative mb-1 w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
                  autoComplete="off"
                  placeholder="Enter email"
                />
                <lable
                  htmlFor="email"
                  className="absolute pointer-events-none left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 -top-4 text-sm text-gray-500  transition-all"
                >
                  Email
                </lable>
              </div>
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <div className="relative mb-1 w-full">
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
                  autoComplete="off"
                  placeholder="Enter fullname"
                />
                <lable
                  htmlFor="fullname"
                  className="absolute pointer-events-none left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 -top-4 text-sm text-gray-500  transition-all"
                >
                  Full Name
                </lable>
              </div>
            </div>
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <div className="relative mb-1 w-full">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
                  autoComplete="off"
                  placeholder="UserName"
                />
                <lable
                  htmlFor="userName"
                  className="absolute pointer-events-none left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 -top-4 text-sm text-gray-500  transition-all"
                >
                  Username
                </lable>
              </div>
            </div>
            <div className="flex justify-center item-center gap-2 p-2">
              {/* ICON GOES HERE IF ANY */}
              <div className="relative mb-1 w-full">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
                  autoComplete="off"
                  placeholder="Enter Password"
                />
                <lable
                  htmlFor="password"
                  className="absolute pointer-events-none left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm  peer-focus:text-gray-500 -top-4 text-sm text-gray-500 transition-all"
                >
                  Password
                </lable>
              </div>
            </div>

            <button className="bg-blue-500 w-full py-1 px-6 rounded text-white hover:bg-blue-400">sign up</button>
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
