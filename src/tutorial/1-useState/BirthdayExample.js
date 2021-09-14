import React from 'react'
import { birthday_list } from './BirthdayList'
// import './Birth.css'

const BirthdayExample = () => {
    const [list, setList] = React.useState(birthday_list)
    const [birthCount, setBirthCount] = React.useState(birthday_list.length)

    const clearBtn = () =>{
        setList([]);
        setBirthCount(0)
    }

    const removeItem = (person)=> {
        const b_list = list.filter(p=>p.id !== person )
        setList(b_list)
        setBirthCount(list.length-1)
    }

    return (
        <div className='container'>
            <h1 className='col-6 mx-auto'>{birthCount} Birthdays Today</h1>
            {list.map(person=>{
                const {id, img, name, age} = person
                return(
                    <div key={id} className='col-6 mx-auto'>
                        <div className='col'>
                            <img src={img} alt={id} />
                            <div className='col'>
                                <h2>{name}</h2>
                                <p>{age}</p>
                                <button onClick={()=>removeItem(id)} className='btn btn-outline-secondary'>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className='col-6 mx-auto btn btn-primary' onClick={clearBtn}>Clear All</button>
        </div>
    )
}

export default BirthdayExample
