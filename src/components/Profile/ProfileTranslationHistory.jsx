import { clearHistory } from "../../api/translation";
import { useUser } from "../../context/UserContext";
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"
import {Link} from "react-router-dom"

const ProfileTranslationHistory= ({translations}) => {
    const { user } = useUser()
    const translationList = translations.slice(-10).reverse().map((translation,index) => <ProfileTranslationHistoryItem key={index} translationItem={translation}/>)

    function handleLogout() {
        localStorage.clear();
        window.location.reload();
    }

    async function handleClearHistory() {
        try {
            await clearHistory(user);

        } catch(e) {
            alert("Oops, an error occurred!");
        }
    }
    return (

        <div>
            <section>
            <h4 className="translation-history-header">Your translation history</h4>
            <div className="translation-history-box">
                <ul>
                    {translationList}

                </ul>
                <button className="clear-history-button" onClick={handleClearHistory}><i className="fa-solid fa-trash-can"></i></button>
                    <Link to="/translation">
                        <button className="profile-to-translation-button"><i className="fa-solid fa-language"></i></button>
                    </Link>
                <button className="logout-button" onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                </div>
            </section>
        </div>
    )
}
export default ProfileTranslationHistory