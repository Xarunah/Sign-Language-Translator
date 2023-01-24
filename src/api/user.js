import {createHeaders} from "./index"

const apiUrl = process.env.REACT_APP_API_URL

//check if the user exist.
const checkForUser = async (username) => {
    try {
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error("Could not complete request/find user")
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

// creates user
const createUser = async (username) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST", // Create a resource
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error("Could'nt create user with the username" + username)
        }
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }

}

export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)

    if (checkError !== null) {
        return [checkError, null]
    }

    if (user.length > 0) { //user does'nt exist. 
        return [null, user.pop()]
    }

    return await createUser(username)

}