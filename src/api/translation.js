import { createHeaders } from ".";

const TRANSLATIONS_API_URL=process.env.REACT_APP_TRANSLATIONS_API_URL;

export async function storeUserTranslation({
    userId,
    translations
}) {
    try {
        const response = await fetch(`${TRANSLATIONS_API_URL}/${userId}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations
            })
        });
        if (!response.ok) {
            throw new Error('Could not update translations history')
        }
        return response.json();
    } catch(err) {
        return err.message
    }
}