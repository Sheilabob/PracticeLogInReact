import { useEffect } from 'react';

function ProgressBar() {
    let completed = 30;
let progressWidth = {
    width: `${completed}%`}
// pbfill.onClick
useEffect(() => {
    const width = getComputedStyle(document.documentElement).getPropertyValue('--width-progress-bar');
    console.log(`--width-progress-bar: ${width}`)
}, [])

function setWidth(width) {
    const oldWidth = getComputedStyle(document.documentElement).getPropertyValue('--width-progress-bar').replace('%', '')
    let newWidth = parseInt(oldWidth);
    if (newWidth === 100) {
        newWidth = 0;
    } else {
    newWidth = newWidth + 25;
    }
    document.documentElement.style.setProperty('--width-progress-bar', `${newWidth}%`);
}

const addToProgress = (e) => {
    e.preventDefault();
    console.log('clicked')
    completed = 75
}
return (
    <>
    <div className="pb-border">
        <div className="pb-fill" id="pbfill" onClick={addToProgress}></div>
    </div>
    <button onClick={() => setWidth('50%')}>Click for progress</button>
    </>
)

};

export default ProgressBar;