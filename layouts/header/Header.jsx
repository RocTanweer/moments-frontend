import { useState } from "react";
// next packages
import Image from "next/image";
import Link from "next/link";
// assets
import logo from "../../assets/moments.png";
// components
import { Input } from "../../components";
// layout
import { MobileSearch } from "../";
// third party library
import { Menu } from "@headlessui/react";
import { BsSearch } from "react-icons/bs";

import React from "react";

export function Header() {
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <header className="flex gap-10 justify-between items-center py-5 px-5">
      <MobileSearch mobileSearch={mobileSearch} setMobileSearch={setMobileSearch} />

      <div className="w-28 md:w-40">
        <Link href="/">
          <a>
            <Image src={logo} alt="moments-logo" className="object-cover" />
          </a>
        </Link>
      </div>

      <form className="hidden md:block md:w-full">
        <Input type="text" name="search" />
      </form>

      <Menu as="div" className="relative shrink-0 flex justify-center items-center">
        <button className="mr-4 md:hidden" onClick={() => setMobileSearch(true)}>
          <BsSearch className="w-6 h-6 " />
        </button>
        <Menu.Button className="rounded-full ring-primary-900 focus:ring-primary-700  ring focus:ring-4 focus:outline-none focus:right-rounded">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="user profile image"
          />
        </Menu.Button>
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}>
                  Profile
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a href="#" className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}>
                  Settings
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button type="submit" className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block w-full text-left px-4 py-2 text-sm`}>
                    Log out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Menu>
    </header>
  );
}
