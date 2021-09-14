import React, {useEffect, useRef} from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const useRefBasics = () => {
    const refContainer = useRef(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(refContainer.current.value)
    }

    useEffect(()=>{
        console.log(refContainer.current)
        refContainer.current.focus()
    })

    return (
        <div className='container'>
            <h1 className='header'>UseRef</h1>
            <hr />

            <form action="" className='form-control' onSubmit={handleSubmit}>
                <input type="text" name="" id="" ref={refContainer}/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default useRefBasics
