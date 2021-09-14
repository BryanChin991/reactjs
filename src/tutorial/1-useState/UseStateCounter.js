import React from 'react'

const UseStateCounter = () => {
    const [count, setCount] = React.useState(0)

    const complexIncrease = ()=>{
        setTimeout(()=>{
            // setCount(count+1)
            // increase base on prev state
            setCount((prevState)=>{
                return prevState + 1
            })
        }, 1000)
    }

    return (
        <div>
            <h3>UseState Counter Example</h3>
            <section style={{marginBottom:'2rem'}}>
                Counter {count}
                <button style={{marginLeft:'2rem'}}
                    onClick={()=>setCount(count+1)}>Increment</button>

                <button style={{marginLeft:'2rem'}}
                    onClick={()=>setCount(count>0 ? count-1 : 0)}>Decrement</button>
                
                <button style={{marginLeft:'2rem'}}
                    onClick={()=>setCount(count>0 ? 0 : 100)}>
                        {count===0 ? '100' : 'Reset'}
                    </button>
            </section>

            <section>
                Counter Complex {count}
                <button style={{marginLeft:'2rem'}}
                    onClick={complexIncrease}>Increment Later</button>
            </section>
        </div>
    )
}

export default UseStateCounter
