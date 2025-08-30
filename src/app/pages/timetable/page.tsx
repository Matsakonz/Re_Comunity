import CustomDropdown from "./components/Dropdown";
import TimeTable from "./components/TimeTable";

export default function Timetable() {
    return (
        <div>
            <div className="pt-[100px] pl-[50px]">
                <h1 className="text-[50px] underline">TimeTable</h1>
                <p className="mt-[5px] text-error">You can check the class schedule, which has oganized <br />by subject for each class room.</p>
            </div>

            <div className="mx-[50px] mt-[25px]">
                <TimeTable/>
            </div>

            <div className="pl-[50px] mt-[20px]">
                <div className="h-20"><CustomDropdown/></div>
            </div>
        </div>
    );
}