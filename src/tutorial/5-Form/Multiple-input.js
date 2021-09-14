import React, {useState} from 'react'

const Multiple = () => {
    // const [firstName, setFirstName] = useState('')
    // const [age, setAge] = useState('')
    // const [email, setEmail] = useState('')
    const [person, setPerson] = useState({firstName:'', age:'', email:''})
    const [people, setPeople] = useState([])

    const handleChange = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setPerson({...person, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(person.firstName && person.age){
            const newPerson = {...person, id:new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName:'', age:'', email:''})
        }
    }

    return (
        <div>
            <h1 className='header'>Multiple Input Form</h1>
            <hr/>

            <article>
                {/* submit form  onSubmit */}
                <form action="" className='form-control'>
                    {/* .form-control */}
                    <div className="form-control">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id='firstName' 
                                name='firstName' 
                                placeholder='Input your Name'
                                value={person.firstName}
                                onChange={handleChange}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="age">Age: </label>
                        <input type="number" id='age' name='age' 
                                placeholder='Input your age'
                                value={person.age}
                                onChange={handleChange}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='age' 
                                name='email' placeholder='Input your email address'
                                value={person.email}
                                onChange={handleChange}/>
                    </div>

                    <button className='btn btn-info mx-5 mt-2' onClick={handleSubmit}>Add Person</button>
                </form>
            </article>

            <br/>
            <article className='container p-4' style={{borderBlockStyle:'double'}}>
                <h3>User Details</h3>
                <p><b>First Name:</b> {person.firstName}</p>
                <p><b>Age:</b> {person.age ? person.age + ' years old' : null}</p>
                <p><b>Email:</b> {person.email}</p>
            </article>

            <div className='container p-4'>
                <h3>People List</h3>
                {people.length!=0 ? 
                    <ol>
                        {people.map(p=>{
                            const {id, firstName, age, email} = p
                        return (
                            <li key={id}>
                                {firstName},  {age + ' years old'}
                            </li> 
                    )})}
                    </ol>
                : '-- No people list --'}
            </div>
        </div>
    )
}

export default Multiple
