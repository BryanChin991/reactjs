import React, {useState, useEffect} from 'react'

const Item = ()=>{
    const [size, setSize] = useState(window.innerWidth)

    const checkSize = ()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', checkSize)
        // cleanup
        return()=>{
            window.removeEventListener('resize', checkSize)
        }
    }, [])

    return (
        <div className='mt-3'>
            <h2>WIndow</h2>
            <h5>Size: {size}px</h5>
        </div>
    )
}

const ShowHide = () => {
    const [show, setShow] = useState(false)

    return (
        <div style={{textAlign:'center'}}>
            <h1>Show Hide</h1>
            <hr/>

            <button className='btn btn-primary' onClick={()=>setShow(!show)}>{show ? 'hide' : 'show'}</button>
            {show && <Item/>}
        </div>
    )
}

export default ShowHide
