import React, { useState, useEffect } from 'react'
import useFatch from './useFatch'



const loadingMessage = <p> todo is loading </p>
const iserror = <p>fucking error </p>


export const DataFacting = () => {

    const { data, isLoading, error } = useFatch('https://jsonplaceholder.typicode.com/todos')

    const todosElement = data &&
        data.map((todo) => {
            return <p key={todo.id}  > {todo.title} </p>
        })


    return (
        <div>

            <h1>  Todos   </h1>

            {error && iserror}

            {isLoading && loadingMessage}

            {todosElement}



        </div>
    )
}
