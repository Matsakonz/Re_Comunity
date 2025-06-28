'use client';

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    document.title = "RE Community | Homepage"
  })
  return (
    <div className="flex justify-between items-center pt-[20px] pl-[40px] text-[#2c2c2c] dark:bg-(--color-neutral)">
        <ul className="flex dark:bg-(--color-neutral) dark:text-neutral-content">
            <li className=" dark:text-neutral-content list-none mr-[40px] text-[24px] font-bold"><Link href="/" className={`[&.active]:text-[#2c2c2c] text-[#BEBEBE] no-underline duration-200 ease-out hover:text-[#2c2c2c] ${pathname === '/' ? 'active' : ''}`}>Homepage</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/timetable" className={`[&.active]:text-[#2c2c2c] text-[#BEBEBE] no-underline duration-200 ease-out hover:text-[#2c2c2c] ${pathname === '/timetable' ? 'active' : ''}`}>Timetable</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/lecture" className={`[&.active]:text-[#2c2c2c] text-[#BEBEBE] no-underline duration-200 ease-out hover:text-[#2c2c2c] ${pathname === '/lecture' ? 'active' : ''}`}>Lecture</Link></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><Link href="/house" className={`[&.active]:text-[#2c2c2c] text-[#BEBEBE] no-underline duration-200 ease-out hover:text-[#2c2c2c] ${pathname === '/house' ? 'active' : ''}`}>House</Link></li>
            </ul>
        <p className="mr-[40px] text-[24px] font-bold">Matsakon T.</p>
    </div>
  );
}''