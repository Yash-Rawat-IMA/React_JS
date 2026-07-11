import { useState } from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [password, setPass] = useState(null)
    return(
        <UserContext.Provider value={{user, setUser, password, setPass}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
// , password, setPassword