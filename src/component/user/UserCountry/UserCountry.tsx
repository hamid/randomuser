import './UserCountry.style.scss';
import type UserCountryType from "./UserCountry.type";

const UserCountry = (props: UserCountryType)=>{
    return(
        <div className='user-country-holder' >
            <h1 title={props.desc ?? ""} className='user-country-name'>{props.name}</h1>
        </div>
    )
}
export default UserCountry;