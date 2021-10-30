import React from "react";
import { useState } from "react";

interface Props {
    text: string;
}

interface UserData {
    id: number;
    name: string;
}


const TestComponent: React.FC<Props> = (props) => {
    const [state, setstate] = useState<number | null>(0);
    const [user, setUser] = useState<UserData>({id:1, name: "dummy"})
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setInputData(e.target.value);

    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{state}</h1>
            <input type="text" value={inputData} onChange={handleInputChange}/>
            <h1>{inputData}</h1>
        </div>
    )
}

export default TestComponent;