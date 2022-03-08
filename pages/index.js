// next packages
import Image from "next/image";
// assets
import logo from "../assets/moments.png";
// components
import Input from "../components/input/Input";

export default function Home() {
  return (
    <div className="container w-full h-full">
      <header className="flex gap-10 justify-between items-center py-5">
        <div className="w-40">
          <Image src={logo} alt="moments-logo" className="object-cover" />
        </div>

        <form className="w-full">
          <Input type="text" name="search" />
        </form>

        <div className="relative shrink-0">
          <button className="rounded-full ring-primary-900 focus:ring-primary-700  ring focus:ring-4 focus:outline-none focus:right-rounded">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="user profile image"
            />
          </button>
          <div className="origin-top-right absolute right-0 mt-2 w-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"></div>
        </div>
      </header>
    </div>
  );
}
