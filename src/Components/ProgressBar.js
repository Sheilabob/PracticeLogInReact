function ProgressBar() {
    let completed = 30;
let progressWidth = {
    width: `${completed}%`}
pbfill.onClick
const addToProgress = (e) => {
    e.preventDefault();
    console.log('clicked')
    completed = 75
}
return (
    <>
    <div className="pb-border">
        <div className="pb-fill" id="pbfill" style={progressWidth} onClick={addToProgress}></div>
    </div>
    <button onClick={addToProgress}>Click for progress</button>
    </>
)

};

export default ProgressBar;