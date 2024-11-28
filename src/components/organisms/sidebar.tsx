/* eslint-disable @typescript-eslint/ban-ts-comment */
// components/Sidebar.js
import { useRouter } from "next/router";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { AuthButtons } from "../molecules/AuthButtons";
import MenuUser from "../molecules/MenuUser";
import { useAuth } from "@/context/auth/AuthProvider";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { user } = useAuth();
  const { pathname } = useRouter(); 

  const navLink = [
    { id: 1, link: "Home", href: "/" },
    { id: 2, link: "About", href: "/about" },
    { id: 3, link: "Profile", href: "/profile" },
    { id: 4, link: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 z-50 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between p-4">
        <h2 className="text-xl text-main font-bold">Menu</h2>
        <button onClick={toggleSidebar}>
          <FaTimes size={24} className="cursor-pointer text-main" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="flex flex-col gap-4">
          {navLink.map((item) => (
            <li key={item.id}>
              {/* Use the router pathname to apply active class */}
              <Link
                href={item.href}
                className={`${
                  pathname === item.href
                    ? "text-main font-bold"
                    : "text-gray-700"
                } font-medium transition-colors duration-200 hover:text-main`}
                onClick={toggleSidebar}
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {
          //@ts-ignore
          user?.id ? (
            <MenuUser />
          ) : (
            //@ts-ignore
            <AuthButtons btn_1="Login" btn_2="Sign Up" />
          )}
        </div>
      </nav>
    </div>
  );
}
