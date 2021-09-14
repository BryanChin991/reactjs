import React, {useState} from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'Peter',
        age: 24,
        description: 'tall',
    })
    const [input, setInput] = useState()

    const EditBtn = ()=>{
        setPerson({...person, description: input})
    }

    return (
        <div>
            <h3>UseState Object Example (Dict)</h3>
            <h8>{person.name} </h8>
            <h8>{person.age} </h8>
            <h8>{person.description} <button onClick={EditBtn}>Edit</button></h8>
            <br/>
            <input type="text" placeholder='new description' onChange={e=>setInput(e.target.value)}/>

        </div>
    )
}

export default UseStateObject
