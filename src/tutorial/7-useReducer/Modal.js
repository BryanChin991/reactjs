import React, {useState, useReducer} from 'react'

const reducer = (state, action)=>{
    if(action.type === 'EMPTY'){
        return {...state, empty:true}
    }
    if(action.type === 'AddItem'){
        const newItems = [...state.people, action.payload]
        return {...state, 
                empty:false,
                people:newItems
                }
    }
    if(action.type === 'DelItem'){
        const newItems = [action.payload]
        return {...state, 
                empty:false,
                people:newItems
                }
    }
    throw new Error ('no matching action')
}

const defaultState = {
    people:[],
    empty:false,
    content:'Please key in',
}

const Modal = () => {
    const [item, setItem] = useState('')
    // const [list, setList] = useState([])
    const [state, dispatch] = useReducer(reducer, defaultState)

    const handlingInput = (e)=>{
        e.preventDefault();
        if(item.length===0){
            // dispatch action
            dispatch({type:'EMPTY'})
        }else{
            const newItem = {id: new Date().getTime().toString(), item}
            dispatch({type:'AddItem', payload:newItem})
            setItem('')
        }
    }

    const handleDelete = (idx)=>{
        const newList = state.people.filter(li=>li!==idx)
        dispatch({type:'DelItem', payload:newList})
    }

    return (
        <div className='header'>
            <h1>Use Reducer</h1>
            <hr/>

            <h5 className='mt-5' style={{color:'red', letterSpacing:'0'}}>{state.empty ? state.content : null}</h5>

            <form className='container mt-5' onSubmit={handlingInput}>
                <input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
                <button>Add</button>
            </form>

            <div className='mt-5'>
                {state.people.map((li) =>{
                    return(
                        <div key={li.id} className='row mt-2'>
                            <h5 className='offset-2 col-4' style={{letterSpacing:'0'}}>{li.item}</h5>
                            <button className='col-2 btn btn-small btn-secondary' onClick={()=>handleDelete(li)}>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Modal
