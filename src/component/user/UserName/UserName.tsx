import './UserName.style.scss'
import type UserNameType from "./UserName.type";

const UserName = (props: UserNameType)=>{
    return(
        <>
            <h1 className='user-first-name'>{props.firstName}</h1>
            <h2 className='user-last-name'>{props.lastName}</h2>
        </>
    )
}
export default UserName;