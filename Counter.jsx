import { useState } from "react"

export default function Counter(props) {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount(count+1)
    return (
        <div>
            <button onClick={handleClick}> {count} </button>
            <button onCLick={handleGlobalClick}> {props.globalCount} </button>
        </div>
    )
}