import './UserImage.style.scss'
import type UserImageType from "./UserImage.type";

const UserImage = (props: UserImageType)=>{
    return(
        <a className='user-card-image' href={props.large} target={"_blank"} rel="noreferrer">
            <img src={props.large} alt={props.alt ?? ""}></img>
        </a>
    )
}
export default UserImage;