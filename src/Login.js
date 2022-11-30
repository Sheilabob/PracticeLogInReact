import { useState } from "react";
import StudentLog from './StudentLog.js';
import TeacherLog from './TeacherLog.js';

function LoginPage() {
    let logSheet;
    const [logins, setLogins] = useState({name: '', email: '',})
    const handleSubmit = (event) => {
        event.persist();
        event.preventDefault();
        setLogins((logins) => ({...logins, name: event.target.login}))
        console.log('login', logins.name);

    }
    if (logins.name === 'student') {
        logSheet = <StudentLog />
    } else if (logins.name === 'teacher') {
        logSheet = <TeacherLog />
    } else {
        logSheet = 'Please sign in'
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <input id="name" name="name" type="text" placeholder="Name" value={logins.name} onChange={handleSubmit} />
        <button type="submit">Login</button>
        </form>
        <div>{logSheet}</div>

    </div>
    )

}

export default LoginPage;