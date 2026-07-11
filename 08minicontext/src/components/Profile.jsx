import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    // const {password} = useContext(UserContext)
    console.log(user)
    // console.log(password)
    return (
    <div>{user? <h1>Profile: {user}</h1>: <h1>User not Logged in</h1>}</div>
  )
}

export default Profile