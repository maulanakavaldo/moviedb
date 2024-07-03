"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logout from "../Logout";

const menuHeader = [
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "User", href: "/user" },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row text-[20px]">
      {menuHeader.map((item, index) => (
        <Link key={index} href={item.href}>
          <li
            className={`${
              pathname === item.href ? "bg-selected" : ""
            } menu-header`}
          >
            {item.name}
          </li>
        </Link>
      ))}
      <div className="mt-5 mr-5">
        <Logout />
      </div>
    </ul>
  );
}
