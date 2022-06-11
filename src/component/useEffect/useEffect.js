import React, { useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1> Conut : {count}  </h1>
            <button onClick={() => {
                setCount(count => count + 1)
            }}  > +  </button>




        </div>
    )
}

export default UseEffect;