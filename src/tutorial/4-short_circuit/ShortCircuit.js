import React, {useState} from 'react'

// short circuit evaluation
// ternary operator

const ShortCircuit = () => {
    const [text, setText] = useState('')
    const firstValue = text || 'hello world'
    const secondValue = text && 'hello world'

    const[isError, setIsError] = useState(false)

    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{letterSpacing:'1rem'}}>Short Circuit</h1>
            <hr/>
            <p>
                {firstValue} <br/>
                value: {secondValue}
            </p>

            <input type="text" placeholder='input here' onChange={e=>setText(e.target.value)}/>

            <h5>&& and -->{text && 'this shown the input is not empty'}</h5>
            <h5>|| or --> {text || 'Input test'}</h5>
            <br/>

            <hr/>
            <h1 style={{letterSpacing:'1rem'}}>Ternary</h1>
            <h3>
                Name: {text ? text : 'John Doe'}
            </h3>
            <button onClick={()=>setIsError(!isError)}>Toggle Error</button>
            {isError ? <h2 style={{color:'red'}}>Error...</h2>
                    : <h2 style={{color:'green'}}>Running...</h2>}
        </div>
    )
}

export default ShortCircuit
