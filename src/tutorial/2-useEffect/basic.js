import React, {useState, useEffect} from 'react'
// by default runs after EVERY re-render
// cleanup function
// second parameter

const Basic = () => {
    const [value, setValue] = useState(0)
    const [size, setSize] = useState(window.innerWidth)
    console.log(size)
    const checkSize = ()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        console.log('call useEffect')
        document.title = value>0 ? `New Messages (${value})`: 'UseEffect'
    }, [value]);

    useEffect(()=>{
        // console.log('appear')
        window.addEventListener('resize', checkSize)
        // clean up
        return ()=>{
            console.log('clean up')
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    console.log('render Component')
    return (
        <div style={{textAlign:'center'}} className='container'>
            <h1 style={{letterSpacing:'1rem'}}>UseEffect Example</h1>
            <hr/>
            <h3 className='py-2'>{value}</h3>
            <button className='btn btn-success mx-2' 
                onClick={()=>setValue(value+1)}>Increment</button>

            <button className='btn btn-danger mx-2' 
                onClick={()=>setValue(value>0 ? value-1 : 0)}>Decrement</button>
            <hr/>

            <h2>UseEffect CleanUp</h2>
            <p>Window size: {size}px</p>
            <hr/>

            <h2>UseEffect Fetch Data</h2>
            <p>please check userUseEffect</p>

        </div>
    )
}

export default Basic
