import { useState } from "react"

const Count = () => {
    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count + 1)
    }
    return(<>
        <div>
            <h1>{count}</h1>
        </div>
        <button onClick={increaseCount}>Click me</button>
</>)
}

export default Count