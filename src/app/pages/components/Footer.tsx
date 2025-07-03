import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 duration-450 w-full">
            <nav>
                <h6 className="footer-title">Services</h6>
                <Link href="/" className="link link-hover">Homepage</Link>
                <Link href="/house" className="link link-hover">House</Link>
                <Link href="/lecture" className="link link-hover">Lecture</Link>
                <Link href="/timetable" className="link link-hover">Timetable</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Department</h6>
                <Link href="https://pe.kmutnb.ac.th/people/" className="link link-hover">About us</Link>
                <Link href="https://pe.kmutnb.ac.th/contact/" className="link link-hover">Contact</Link>
                <Link href="https://pe.kmutnb.ac.th/robotic-engineering-program/" className="link link-hover">Course</Link>
                <Link href="https://pe.kmutnb.ac.th/category/event/" className="link link-hover">Activity</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link href="/" className="link link-hover">Terms of use</Link>
                <Link href="/" className="link link-hover">Privacy policy</Link>
                <Link href="/" className="link link-hover">Cookie policy</Link>
            </nav>
        </footer>
    );
}