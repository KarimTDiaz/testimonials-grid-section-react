import Profile from "../profile/Profile"
import HeadLine from "../headline/HeadLine"
import Content from "../content/Content"
import { StyledCard } from "./styles"

const Card = ({profile,name,qualification,headline,content,bgcolor,bgimage,columns,rows,border,profileColor,colorSoft}) => {
    return (
        <>
    <StyledCard bgcolor={bgcolor} bgimage={bgimage} columns={columns} rows={rows}>
      <Profile profile={profile} name={name} qual={qualification} border={border} profileColor={profileColor} softColor={colorSoft}/>
    <div>
        <HeadLine text={headline} color={profileColor}/>
        <Content text={content} color={colorSoft}/>
    </div>
    </StyledCard>
    </>
    )
}

export default Card