import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users'

const Users = () => {
    const [user, setUser] = useState([])

    const getUsers = async()=>{
        const response = await fetch(url)
        const users = await response.json();
        setUser(users)
        console.log(users)
    }

    useEffect(()=>{
        getUsers()
    }, [])

    return (
        <div>
            <h1 style={{textAlign:'center', letterSpacing:'0.75rem'}}>UseEffect Fetch Data</h1>
            {
                user.map(u=>{
                    const {login, id, avatar_url, html_url} = u
                    return(
                        <div key={id} className='container mx-5 row'>
                            <div className='col-2'>
                                <img src={avatar_url} alt="" style={{height:'70px', width:'70px'}}/>
                            </div>
                            <div className='col-3'>
                                <p className='m-0'>{login}</p>
                                <h9>{html_url}</h9>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users
