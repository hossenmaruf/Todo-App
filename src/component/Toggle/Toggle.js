import React, { useState } from 'react'

export const Toggle = () => {

   const [ toggle , setToggle ] = useState(true) ;

    return (
        <div style={{ margin: "1rem", backgroundColor: 'green', padding: '1rem', color: 'red' }}    >
         

             { toggle && (

             <p>  what the fuck is toggle??? </p>

             )


             }
            



            <div style={{ textAlign: 'center' }}       >

                <button onClick={ () => {setToggle (!toggle)}   }  > 
                
                   { toggle ? 'hide' : 'show' }
                
                
                   </button>


            </div>

        </div>
    )
}
