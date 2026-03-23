'use client'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>Counter {count}</p>
            <button className='bg-blue-400 p-4 rounded-lg' onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter