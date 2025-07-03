'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/theme_changer/theme-toggle";
import LogoutBtn from "./LogoutBtn";
// import LogoutBtn from "./logoutBtn";


export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname()
  const { setTheme } = useTheme()

  let name = user?.name.toLowerCase();
  name = name.split(" ")
  name = name[0][0].toUpperCase() + name[0].slice(1) + " " + name[1][0].toUpperCase() + ".";

  return (
    <div className="flex justify-between items-center py-[20px] pl-[40px] text-base-content bg-base-100 duration-450">
        {/* Menu */}
        <ul className="flex bg-base-100 duration-450">
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/pages/" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages' ? 'active' : ''}`}>Homepage</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/pages/timetable" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/timetable' ? 'active' : ''}`}>Timetable</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/pages/lecture" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/lecture' ? 'active' : ''}`}>Lecture</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/pages/house" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/house' ? 'active' : ''}`}>House</Link></li>
        </ul>
        
        <div className="flex items-center">
          {/* change theme button */}
            <ThemeToggle />

          {/* Name that fetch from google id */}
          <p className="ml-[20px] mr-[20px] text-[24px] font-bold">{name}</p>
          <div className="dropdown dropdown-end mr-[40px]">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.image} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Settings</a></li>
                <li><LogoutBtn/></li>
              </ul>
            </div>
        </div>
    </div>
  );
}