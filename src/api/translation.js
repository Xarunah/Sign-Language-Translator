import { createHeaders } from ".";
const apiUrl=process.env.REACT_APP_API_URL;


export const storeUserTranslation=async(translation, user)=> {
    
    try {
        const response = await fetch(`${apiUrl}/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: [...user.translations, translation ]
            })
        });
        if (!response.ok) {
            throw new Error('Could not update translations history')
        }
        const result = await response.json()
        return [null, result]
    } catch(err) {
        return err.message
    }
}