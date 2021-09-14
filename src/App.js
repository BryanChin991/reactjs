import React from 'react'
import './App.css'
import ErrorExample from './tutorial/1-useState/1-error-example'
import UseStateArray from './tutorial/1-useState/UseStateArray'
import UseStateObject from './tutorial/1-useState/UseStateObject'
import UseStateCounter from './tutorial/1-useState/UseStateCounter'

const App = () => {
    return (
        <div className='container'>
            <h1 style={{textAlign:'center', letterSpacing:'2rem'}}>Advance React</h1>
            <hr/>
            <ErrorExample/>
            <hr/>
            <UseStateArray />
            <hr/>
            <UseStateObject />
            <hr/>
            <UseStateCounter />
        </div>
    )
}

export default App
