import { clearHistory } from "../../api/translation";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { useUser } from "../../context/UserContext";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory= ({translations}) => {
    const { user, setUser } = useUser()
    const translationList = translations.slice(-10).reverse().map((translation,index) => <ProfileTranslationHistoryItem key={index} translationItem={translation}/>)

    function handleLogout() {
        localStorage.clear();
        window.location.reload();
    }

    async function handleClearHistory() {
        try {
            await clearHistory(user);
            // setUser({
            //     ...user,
            //     translations: []
            // });
            // localStorage.setItem(STORAGE_KEY_USER, JSON.stringify({
            //     ...user,
            //     translations: []
            // }))
            // window.location.reload();
        } catch(e) {
            alert("Oops, an error occurred!");
        }
    }

    return (


        <div>
            <section>
                <h4>Your translation history</h4>
                <ul>
                    {translationList}

                </ul>
                <button onClick={handleClearHistory}>Clear History</button>
                <button onClick={handleLogout}>Logout</button>
            </section>
        </div>
    )
}
export default ProfileTranslationHistory