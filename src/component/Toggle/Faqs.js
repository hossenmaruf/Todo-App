import React, { useState } from 'react'
import { FaqData } from './data'
import { Faq } from './Faq'

import style from './faqs.module.css'



export const Faqs = () => {

    const [faqs, setFaqs] = useState(FaqData);





    return <main  className= {style.container}  >

        <section className= {style.faqs}   >


            <h1> Faqs   </h1>
            {faqs.map(faq => <Faq key={faq.id} {...faq} />)}



        </section>




    </main>

}
