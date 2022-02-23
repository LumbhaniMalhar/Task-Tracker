import React, { useState } from 'react'

export default function Tanay() {
    const [count, setcount] = useState(0)
    const increment = () => {
        setcount(count + 1);
      };
    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={increment}>Add one</button>
        </div>
    )
}