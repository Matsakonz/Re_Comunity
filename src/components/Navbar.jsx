'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle";


export default function Navbar() {
  const pathname = usePathname()

  const { setTheme } = useTheme()

  return (
    <div className="flex justify-between items-center py-[20px] pl-[40px] text-base-content bg-base-100 duration-450">
        {/* Menu */}
        <ul className="flex bg-base-100 duration-450">
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/' ? 'active' : ''}`}>Homepage</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/timetable" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/timetable' ? 'active' : ''}`}>Timetable</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/lecture" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/lecture' ? 'active' : ''}`}>Lecture</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/house" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/house' ? 'active' : ''}`}>House</Link></li>
        </ul>
        
        <div className="flex items-center">
          {/* change theme button */}
            <ThemeToggle />

          {/* Name that fetch from google id */}
          <p className="ml-[20px] mr-[40px] text-[24px] font-bold">Matsakon T.</p>
        </div>
    </div>
  );
}