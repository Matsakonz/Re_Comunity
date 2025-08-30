import Card from "./components/Card";
import CardSlider from "./components/slider";
import Herobanner from "./components/Herobanner";
import Link from "next/link"
import TimeTable from "./timetable/components/TimeTable";

export default function Home() {

  const imgsrc = "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const title = "Machenic"
  const detail = "A card component has a figure, a body part, and inside body there are title and actions parts"

  return (
    <div>
      <Herobanner/>
      <div className="px-[60px] pb-[20px]">
        <p className="text-[24px] font-bold pb-[10px]">Timetable</p>
        <TimeTable/>
      </div>

      <div className="px-[60px]">
        <p className="text-[24px] font-bold mb-[-20px]">Lecture</p>
        <div className="mx-[-8px]">
          <CardSlider/>
        </div>
      </div>

      <div className="px-[60px] mt-[-20px]">
        <p className="text-[24px] font-bold mb-[-20px]">House</p>
        <div className="mx-[-8px]">
          <CardSlider/>
        </div>
        <div className="flex justify-end mt-[20px] mr-[10px]"><button className="btn btn-outline">MORE</button></div>
      </div>
    </div>
  );
}
