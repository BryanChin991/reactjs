import React, {useState} from 'react'

// JS
// const input = document.getElementById('mytest')
// const inputValue = input.value
// React
// value, onChange

const ControlledInput = () => {
    const [firstName, setFirstName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleSubmit = (e) =>{
        // prevent page refresh
        e.preventDefault();

        if(firstName && age){
            const person = {id:new Date().getTime().toString(), 
                            firstName, age, email}
            setPeople([...people, person])
            setFirstName('')
            setAge('')
            setEmail('')
            console.log(person)
        }

        console.log(e.target)
        console.log(firstName, email, age)
    }

    return (
        <div>
            <h1 className='header'>Controlled Input Form</h1>
            <hr/>

            <article>
                {/* submit form  onSubmit */}
                <form action="" className='form-control' onSubmit={handleSubmit}>
                    {/* .form-control */}
                    <div className="form-control">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="text" id='firstName' 
                                name='firstName' 
                                placeholder='Input your Name'
                                value={firstName}
                                onChange={e=>setFirstName(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="age">Age: </label>
                        <input type="number" id='age' name='age' 
                                placeholder='Input your age'
                                value={age}
                                onChange={e=>setAge(e.target.value)}/>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email: </label>
                        <input type="email" id='age' 
                                name='email' placeholder='Input your email address'
                                value={email}
                                onChange={e=>setEmail(e.target.value)}/>
                    </div>

                    <button className='btn btn-info mx-5 mt-2'>Add Person</button>
                </form>
            </article>

            <br/>
            <article className='container p-4' style={{borderBlockStyle:'double'}}>
                <h3>User Details</h3>
                <p><b>First Name:</b> {firstName}</p>
                <p><b>Age:</b> {age ? age + ' years old' : null}</p>
                <p><b>Email:</b> {email}</p>
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

export default ControlledInput
