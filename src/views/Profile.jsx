import { findUserById } from "../api/user"
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import useEffect from "react"


function Profile() {

    const { user, setUser } = useUser()
    useEffect(() => {
        const findUser = async () => {
            const [error, latestUser] = await findUserById(user.id)
            if (error !== null) {
                setUser(latestUser)
            }
        }

        findUser()

    }, [setUser, user.id])

    return (
        <><h1>Profile</h1>
            <ProfileHeader username={user.username} />
            <ProfileActions />
            <ProfileTranslationHistory translations={user.translations} />
        </>

    )
}
export default withAuth(Profile)