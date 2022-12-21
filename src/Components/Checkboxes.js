function Checkboxes({checkboxID}) {


    const handleDayCheckboxes = () => {
        let checkboxes = document.querySelectorAll(`input[name=${checkboxID}]:checked`);
        let totalScore = 0;
        checkboxes.forEach(() => {
            totalScore += 15;
        })
        console.log(totalScore)
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
        </div>
    )
};

export default Checkboxes;