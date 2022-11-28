import { useState } from "react";
import StudentLog from './StudentLog.js';
import TeacherLog from './TeacherLog.js';

function LoginPage() {
    let logSheet;
    const [val, setVal] = useState("Please log in")
    const click = () => {
        alert(val)
    }
    const getValue =(entry) => {
        setVal(entry.target.value)
    }
    if (val === 'student') {
        logSheet = <StudentLog />
    } else if (val === 'teacher') {
        logSheet = <TeacherLog />
    } else {
        logSheet = 'Please sign in'
    }
    return (
    <div>
        <input type="text" value={val} onChange={getValue} />
        <button onClick={click}>Login</button>
        <div>{logSheet}</div>

    </div>
    )

}

export default LoginPage;