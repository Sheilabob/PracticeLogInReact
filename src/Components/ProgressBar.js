import { useEffect, useState } from 'react';

function ProgressBar() {
    const [progressMessage, setProgressMessage] = useState(<div>Let's Get Started!</div>);

    let completed = 30;
let progressWidth = {
    width: `${completed}%`}
// pbfill.onClick
useEffect(() => {
    const width = getComputedStyle(document.documentElement).getPropertyValue('--width-progress-bar');
    console.log(`--width-progress-bar: ${width}`)
}, [])

function setWidth() {
    const oldWidth = getComputedStyle(document.documentElement).getPropertyValue('--width-progress-bar').replace('%', '')
    let newWidth = parseInt(oldWidth);
    if (newWidth === 100) {
        newWidth = 0;
            setProgressMessage(<div>Let's Get Started!</div>)
    } else {
    newWidth = newWidth + 25;
        if (newWidth === 100) {
            setProgressMessage(<div>YAY!</div>)
        } else {
    setProgressMessage(<div>Keep Going!</div>)
        }
    }
    document.documentElement.style.setProperty('--width-progress-bar', `${newWidth}%`);
    console.log(typeof getComputedStyle(document.documentElement).getPropertyValue('--width-progress-bar'))
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
    <button onClick={() => setWidth()}>Click for progress</button>
    {progressMessage}
    </>
)

};

export default ProgressBar;