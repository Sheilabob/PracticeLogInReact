import { useState } from "react";
import StudentLog from './StudentLog.js';
import TeacherLog from './TeacherLog.js';

function LoginPage() {
    let logSheet;
    const [values, setValues] = useState({name: ''})
    const [pages, setPages] = useState(false)

    const handleNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            name: event.target.value,
        }));
    };

    const resetToggle = () => {
        setPages(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setPages(!pages)
        console.log('login', values.name);
        console.log('pages', pages)
    }
    if (values.name === 'student' && pages) {
        logSheet = <StudentLog />
    } else if (values.name === 'teacher' && pages) {
        logSheet = <TeacherLog />
    } else {
        logSheet =<form onSubmit={handleSubmit}>
        <input id="name" name="name" type="text" placeholder="Name" value={values.name} onChange={handleNameInputChange} />
        <button type="submit" onSubmit={handleSubmit}>Login</button>
        </form>
    }
    return (
    <div>

        <div>{logSheet}</div>

    </div>
    )

}

export default LoginPage;