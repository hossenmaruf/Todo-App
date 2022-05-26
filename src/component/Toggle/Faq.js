import React, { useState } from 'react'

import style from './faq.module.css'




export const Faq = ({ id, title, decs }) => {

    const [toggle, setToggle] = useState(false);

    return <article className={style.faq}  >

        <div>

            <h2> {title}  </h2>
            <button onClick={() => { setToggle(!toggle) }}  >

                {toggle ? '-' : '+'}



            </button>

        </div>


        {toggle && <p> {decs} </p>}






    </article>
}
