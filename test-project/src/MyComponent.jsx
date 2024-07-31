
import React, { useState } from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest") // devuelve variable y stateful variable
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)


    const updateName = () => {
        setName("lily") // la stateful variable se actualiza con la nueva info, y se la pasa a la variable (name)
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const changeTrue = () => {
        setIsEmployed(!isEmployed)

    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Ague: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>is employed?: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={changeTrue}>Status</button>

    </div>)

}

export default MyComponent