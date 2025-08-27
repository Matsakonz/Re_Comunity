import CustomDropdown from "./components/Dropdown";
import TimeTable from "./components/TImeTable";

export default function Timetable() {
    return (
        <div>
            <div className="pt-[100px] pl-[50px]">
                <h1 className="text-[50px] underline">TimeTable</h1>
                <p className="mt-[5px] text-error">You can check the class schedule, which has oganized <br />by subject for each class room.</p>
            </div>

            <div>
                <TimeTable/>
            </div>

            <div className="pl-[50px] mt-[20px]">
                <div className="h-20"><CustomDropdown/></div>
                
                {/* <select defaultValue="SECTION" className="select select-ghost bg-base-200 rounded-box w-30">
                    <option disabled={true}>SECTION</option>
                    <option>A</option>
                    <option>B</option>
                </select> */}
            </div>
        </div>
    );
}