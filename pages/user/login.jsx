import Image from "next/image";
import Link from "next/link";
import signupImage from "../../assets/undraw_online_connection_6778.svg";
import moments from "../../assets/moments.png";
import { MdOutlineMail } from "react-icons/md";
import { FiLock } from "react-icons/md";

function Signup() {
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

          <form className="w-full mb-3">
            <div className="flex justify-center item-center gap-2 p-2 ">
              {/* ICON GOES HERE IF ANY */}
              <div className="relative mb-1 w-full">
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="peer border-0 border-b-2 w-full border-gray-300 text-gray-900 focus:border-rose-600 focus:outline-none placeholder-transparent"
                  autoComplete="off"
                  placeholder="Enter UserName"
                />
                <lable
                  htmlFor="userName"
                  className="absolute  left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-gray-500 -top-4 text-sm text-gray-500  transition-all"
                >
                  username
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
                  placeholder="Enter UserName"
                />
                <lable
                  htmlFor="password"
                  className="absolute  left-0 peer-placeholder-shown:top-1 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-900 peer-focus:-top-4 peer-focus:text-sm  peer-focus:text-gray-500 -top-4 text-sm text-gray-500 transition-all"
                >
                  password
                </lable>
              </div>
            </div>

            <button className="bg-blue-500 w-full py-1 px-6 rounded text-white hover:bg-blue-400">login</button>
          </form>

          <div className="mb-3">
            <p className="font-light from-neutral-300 text-xs">
              New here?{" "}
              <Link href={"/user/signup"}>
                <span className="text-blue-800 underline">Signup</span>
              </Link>
            </p>
          </div>

          <div className="text-center mb-3">
            <p>Or you can join with</p>
          </div>

          <div>
            <button className="w-full bg-blue-300 py-1 px-6 rounded hover:bg-blue-400">Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
