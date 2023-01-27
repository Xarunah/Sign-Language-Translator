import "../../styling/profileStyling.css";

const ProfileHeader= ({username}) => {
    return (
        <header>
            <h4 className="profile-header">Hi {username}, welcome back!</h4>
        </header>
    )
}
export default ProfileHeader