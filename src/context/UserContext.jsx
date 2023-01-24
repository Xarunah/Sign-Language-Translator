import { createContext, useContext, useState } from "react"

// Context responsible for exposing - delete this later
const UserContext = createContext()
export const useUser = () => {
    return useContext(UserContext) // Returns {user, setUser}
}

// Provider responsible for managing state - delete this later
const UserProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const state = {user, setUser}

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider