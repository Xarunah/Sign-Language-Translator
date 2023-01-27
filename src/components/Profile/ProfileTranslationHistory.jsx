import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory= ({translations}) => {

    const translationList = translations.map((translation,index) => <ProfileTranslationHistoryItem key={index} translationItem={translation}/>)
    

    return (
        <section>
            <h4 className="translation-history-header">Your translation history</h4>
            <div className="translation-history-box">
            <ul>
                {translationList}
            </ul>
            </div>
        </section>
    )
}
export default ProfileTranslationHistory