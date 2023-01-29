import withAuth from "../hoc/withAuth"
import TranslationForm from "../components/Translation/TranslationForm"
import "../../src/styling/translationStyling.css"

const Translation = () => {
    return (
        <>
        <h1 className="translation-header">Lost in Translation</h1>
        <TranslationForm/>
        </>
    )
}
export default withAuth(Translation)