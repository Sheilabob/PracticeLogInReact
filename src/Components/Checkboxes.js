import { useState } from "react";

function Checkboxes({checkboxID}) {
    const [checkboxTotal, setCheckboxTotal] = useState(0);

    const handleDayCheckboxes = () => {
        let checkboxes = document.querySelectorAll(`input[name=${checkboxID}]:checked`);
        let allCheckboxes = document.querySelectorAll(`input[name=${checkboxID}]`);
        let totalScore = 0;
        let totalCheckboxes = 0;
        allCheckboxes.forEach(() => {
            totalCheckboxes += 1;
        })
        checkboxes.forEach(() => {
            totalScore += (1/totalCheckboxes);
        })
        setCheckboxTotal(Math.round(totalScore*100))
    }

    return (
        <div className="card assignment-card">
            <label>Monday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Tuesday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Wednesday</label>
            <input type="checkbox"  name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Thursday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Friday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Saturday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <label>Sunday</label>
            <input type="checkbox" name={checkboxID} onChange={handleDayCheckboxes} />
            <div>Progress: {checkboxTotal}%</div>
        </div>
    )
};

export default Checkboxes;