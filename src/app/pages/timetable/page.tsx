export default function Timetable() {
    return (
        <div>
            <div className="pt-[100px] pl-[50px]">
                <h1 className="text-[50px] underline">TimeTable</h1>
                <p className="mt-[5px] text-error">You can check the class schedule, which has oganized <br />by subject for each class room.</p>
            </div>

            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-[50px] ml-[25px]">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>DAY</th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>TIME</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th>TIME</th>
                                <th>6.00-7.00</th>
                                <th>7.00-8.00</th>
                                <th>8.00-9.00</th>
                                <th>9.00-10.00</th>
                                <th>10.00-11.00</th>
                                <th>11.00-12.00</th>
                                <th>12.00-13.00</th>
                                <th>13.00-14.00</th>
                                <th>14.00-15.00</th>
                                <th>16.00-17.00</th>
                                <th>17.00-18.00</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Mon</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Tue</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Wed</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Thur</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Fri</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Sat</th>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Sun</th>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="pl-[50px] mt-[20px]">
                <select defaultValue="SECTION" className="select select-ghost bg-base-200 rounded-box w-30">
                    <option disabled={true}>SECTION</option>
                    <option>A</option>
                    <option>B</option>
                </select>
            </div>
        </div>
    );
}