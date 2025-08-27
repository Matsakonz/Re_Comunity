import Card from "./components/Card";
import Herobanner from "./components/Herobanner";
import Link from "next/link"

export default function Home() {

  const imgsrc = "https://plus.unsplash.com/premium_photo-1672256330854-98c717493128?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const title = "Machenic"
  const detail = "A card component has a figure, a body part, and inside body there are title and actions parts"

  return (
    <div>
      <Herobanner/>
      <div className="px-[60px] pb-[20px]">
        <p className="text-[24px] font-bold pb-[10px]">Timetable</p>
        <Link href="#" className="card bg-base-100 w-180 shadow-sm hover:-translate-y-1 hover:scale-103">
            <img src="https://datavizcatalogue.com/methods/images/top_images/timetable.png" alt="Timetable"/>
        </Link>
      </div>

      <div className="px-[60px] pb-[10px]">
        <p className="text-[24px] font-bold pb-[10px]">Lecture</p>
        <div className="flex justify-between">
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
        </div>
        <div className="flex justify-end mt-[20px] mr-[10px]"><button className="btn btn-outline">MORE</button></div>
      </div>

      <div className="px-[60px] pb-[50px]">
        <p className="text-[24px] font-bold pb-[10px]">House</p>
        <div className="flex justify-between">
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
          <Card img={imgsrc} title={title} detail={detail} />
        </div>
        <div className="flex justify-end mt-[20px] mr-[10px]"><button className="btn btn-outline">MORE</button></div>
      </div>
    </div>
  );
}
