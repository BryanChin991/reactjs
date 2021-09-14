import React, {useState} from 'react'

const UseStateArray = () => {
    const [people, setPeople] = useState(['Peter', 'John'])
    const [name, setName] = useState()

    const removeItem = (p) =>{
        const new_nameList = people.filter(person => person !== p)
        setPeople(new_nameList)
    }

    return (
        <div>
            <h3>UseSate Array Example</h3>
            <input type="text" onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setPeople([...people, name])}>Add</button>
            <button onClick={()=>setPeople([])}>Clear</button>
            {people.map(p=>{
                return (
                    <>
                        <li key={p}>
                            {p} 
                            <button style={{marginLeft:'2rem'}} onClick={()=>removeItem(p)}>x</button>
                        </li>
                        
                    </>
                )
            })}
        </div>
    )
}

export default UseStateArray
