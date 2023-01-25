import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({translations}) => {

    const translationList = translations.map(translation => <ProfileTranslationHistoryItem key={translation} translation={translation}/>) //login med bruger ellers virker lortet ikke

    return (
        <section>
            <h4>Translation history</h4>
            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default ProfileTranslationHistory