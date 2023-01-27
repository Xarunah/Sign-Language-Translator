import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory= ({translations}) => {

    const translationList = translations.slice(-10).reverse().map((translation,index) => <ProfileTranslationHistoryItem key={index} translationItem={translation}/>)


    return (


        <div>
            <section>
                <h4>Your translation history</h4>
                <ul>
                    {translationList}

                </ul>
            </section>
        </div>
    )
}
export default ProfileTranslationHistory