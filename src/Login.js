import { useState } from "react";

function LoginPage() {
    const [val, setVal] = useState("Please log in")
    const click = () => {
        alert(val)
    }
    const getValue =(entry) => {
        setVal(entry.target.value)
    }
    return (
    <div>
        <input type="text" value={val} onChange={getValue} />
        <button onClick={click}>Login</button>
        <div>{val}</div>
    </div>
    )

}

export default LoginPage;