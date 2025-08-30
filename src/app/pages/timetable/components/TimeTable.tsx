export default function TimeTable() {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-200 duration-450 p-2">
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
                </tr>
                <tr>
                    <th>Tue</th>
                </tr>
                <tr>
                    <th>Wed</th>
                </tr>
                <tr>
                    <th>Thur</th>
                </tr>
                <tr>
                    <th>Fri</th>
                </tr>
                <tr>
                    <th>Sat</th>
                </tr>
                <tr>
                    <th>Sun</th>
                </tr>
            </tbody>
        </table>
    </div>
)}