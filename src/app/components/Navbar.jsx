export default function Navbar() {
  return (
    <div className="flex justify-between items-center mt-[20px] ml-[40px] text-[#2c2c2c]">
        <ul className="flex">
            <li className="list-none mr-[40px] text-[24px] font-bold"><a className="text-[#2c2c2c] no-underline  duration-200 ease-out hover:text-[#2c2c2c]" href="#">Homepage</a></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><a className="text-[#BEBEBE] no-underline  duration-200 ease-out hover:text-[#2c2c2c]" href="#">Timetable</a></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><a className="text-[#BEBEBE] no-underline  duration-200 ease-out hover:text-[#2c2c2c]" href="#">Lecture</a></li>
            <li className="list-none mr-[40px] text-[24px] font-bold"><a className="text-[#BEBEBE] no-underline  duration-200 ease-out hover:text-[#2c2c2c]" href="#">House</a></li>
        </ul>
        <p className="mr-[40px] text-[24px] font-bold">Matsakon T.</p>
    </div>
  );
}