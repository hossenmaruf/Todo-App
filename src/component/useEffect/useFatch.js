import React, { useState, useEffect } from 'react'

const useFatch = (url) => {


    const [data, setData] = useState(null)
    const [isLoading, isSetLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
        
        .then((res) => {
            if (!res.ok){
                throw Error ("fATCHING IS NOT SUCCESSFULL")
            } else 
            { 
                return res.json() ;
                
            }
            
         } )

            .then((data) => {
                setData(data);
                isSetLoading(false);
                setError(null) ;

            })
            .catch ((error)  => {
                setError(error.message) ;
                isSetLoading(false) ;
            }
            )



    }, [url]) ;




     return  {data , isLoading , error}








}

export default useFatch