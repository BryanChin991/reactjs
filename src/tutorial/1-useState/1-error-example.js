import React, {useState} from 'react'

const ErrorExample = () => {
    
    const [title, setTitle] = useState('UseSate Example')
    const [input, setInput] = useState()

    const TitleChange = ()=>{
        input ? setTitle(`you typed : ${input}`) 
        : setTitle('UseSate Error Example')
    }

    return (
        <React.Fragment>
            <h3>{title}</h3>
            <input type="text" placeholder='Enter new title' 
                onChange={e=>setInput(e.target.value)}/>
            <button onClick={TitleChange}>Change title</button>
        </React.Fragment>
    )
}

export default ErrorExample
