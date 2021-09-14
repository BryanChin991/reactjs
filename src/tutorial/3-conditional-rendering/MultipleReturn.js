import React, {useState, useEffect} from 'react'

const url = 'https://api.github.com/users/QuincyLarsons'

const MultipleReturn = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [user, setUser] = useState('default user')
    // const {id, login, avatar_url} = user


    // const getInput = async()=>{
    //     const response = await fetch(url)
    //     const input = await response.json();
    //     setUser(input)
    //     setIsLoading(false)
    // }

    useEffect(()=>{
        // getInput()
        fetch(url)
        // set error in the early
        .then(resp => {
            if (resp.status >= 200 && resp.status <=299){
                return resp.json()
            }else{
                setIsLoading(false)
                setIsError(true)
                throw new Error(resp.statusText)
            }
        })
        .then(user =>{
            setUser(user)
            setIsLoading(false)
        })
        .catch(error => console.log(error))
    }, [])

    if(isLoading){
        return <h1>Loading...</h1>
    }
    else if (isError){
        return <h1>Error... Erase url (delete one s)</h1>
    }
    return (
        <div>
            <h1>Multiple Return</h1>
            <div key={user.id}>
                <h2 style={{textAlign:'center'}}>{user.login}</h2>
                <img src={user.avatar_url} alt="" />    
            </div>
            
        </div>
    )
}

export default MultipleReturn
