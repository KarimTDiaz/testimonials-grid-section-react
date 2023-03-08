import { ProfileContainer, ProfileSubtitle, ProfileTitle, StyledImage } from "./styles"

const Profile = ({profile ,name,qual,border,profileColor,softColor}) => {
    return( <ProfileContainer>
        <StyledImage src={profile} bordercolor={border}/>
        <div>
            <ProfileTitle profilecolor={profileColor}>{name}</ProfileTitle>
            <ProfileSubtitle color={softColor}>{qual}</ProfileSubtitle>
        </div>
    </ProfileContainer>)
}

export default Profile