'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation'
import LogoutBtn from "./LogoutBtn";

export default function Drawer() {
    const pathname = usePathname()

    return (
        <div className="drawer drawer-end w-fit">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4"className="btn btn-circle swap swap-rotate bg-transparent border-none">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />
                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"> <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 text-[24px]">
                    {/* Sidebar content here */}
                    <li><Link href="/pages/" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages' ? 'active' : ''}`}>Homepage</Link></li>
                    <li><Link href="/pages/timetable" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/timetable' ? 'active' : ''}`}>Timetable</Link></li>
                    <li><Link href="/pages/lecture" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/lecture' ? 'active' : ''}`}>Lecture</Link></li>
                    <li><Link href="/pages/house" className={`[&.active]:opacity-100 opacity-50 text-base-content no-underline duration-200 ease-out hover:opacity-100 ${pathname === '/pages/house' ? 'active' : ''}`}>House</Link></li>
                    <hr className="opacity-50 my-4"/>
                    <li><Link href="https://pe.kmutnb.ac.th/people/">About us</Link></li>
                    <li><Link href="https://pe.kmutnb.ac.th/contact/">Contact</Link></li>
                    <li><Link href="https://pe.kmutnb.ac.th/robotic-engineering-program/">Course</Link></li>
                    <li><Link href="https://pe.kmutnb.ac.th/category/event/">Activity</Link></li>
                    <hr className="opacity-50 my-4"/>
                    <div>
                        <li><Link href="">Setting</Link></li>
                        <li><LogoutBtn/></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}