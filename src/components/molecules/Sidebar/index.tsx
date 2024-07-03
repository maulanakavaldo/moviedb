"use client";
import Link from "next/link";
import { useState } from "react";
import SidebarIc from "@components/atoms/SidebarIc";
import { usePathname } from "next/navigation";

const menuSidebar = [
  { name: "Now Playing", href: "/now-playing" },
  { name: "Popular", href: "/popular" },
  { name: "Top Rated", href: "/top-rated" },
  { name: "Upcoming", href: "/up-coming" },
];

const withoutMenu = /^\/login|register$/i;

export default function Sidebar() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const pathName = usePathname();

  if (withoutMenu.test(pathName)) return null;

  return (
    <div className="custom-shadow">
      <SidebarIc onClick={() => setSidebarVisible(!isSidebarVisible)} />
      <aside className={isSidebarVisible ? "visible" : "hidden"}>
        <ul className="text-[20px]">
          {menuSidebar.map((item, index) => (
            <Link href={item.href} key={index}>
              <li
                className={`${
                  pathName === item.href ? "bg-selected" : ""
                } menu-sidebar`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </div>
  );
}

