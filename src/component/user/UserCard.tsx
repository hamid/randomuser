import ContentLoader from "react-content-loader"
import UserImage from './UserImage/UserImage';
import UserName  from './UserName/UserName';
import UserCountry from './UserCountry/UserCountry';
import type UserCardType from './UserCard.type'
import './UserCard.style.scss'


const UserCard = (props: UserCardType)=>{


    const renderContentLoader =function(){
        return (<ContentLoader
            speed={2}
            width={"100%"}
            height={"100%"}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            viewBox="0 0 400 400"
            // style={{display:"flex",flex:1}}
        >
            <rect x="2%" y="10" rx="10" ry="10" width="96%" height="60%" />
            <rect x="2%" y="70%" rx="5" ry="5" width="96%" height="15" />
            <rect x="2%" y="80%" rx="5" ry="5" width="96%" height="15" />
        </ContentLoader>)
    }


    
    //- loading
    let loadingContent = null;
    if (props.loading || props.user?.name === undefined)
        loadingContent=  renderContentLoader();

    let user = props.user;
    //- prepear user info
    let firstName   = `${user?.name?.title}. ${user?.name?.first}`;
    let lastName    = `${user?.name?.last}`;
    let image       = user?.picture;
    let country     = user?.location?.country ?? "";
    let countryDesc = `${user?.location?.city} ${user?.location?.state} ${user?.location?.state} ${user?.location?.street.name}`;

return(
    <figure className="user-card-holder">
        {props.loading ? loadingContent
        :<>
            <section className='col-w1'>
                <UserImage
                    large={image?.large ??""}
                    medium={image?.medium?? ""}
                    thumbnail={image?.thumbnail??""}
                    alt={firstName+" "+lastName}
                />    
            </section>
            <section className='col-w2'>
                <UserName
                    firstName={firstName}
                    lastName={lastName}
                />
                <UserCountry
                    name={country}
                    desc={countryDesc}
                />
            </section>
        </>}

    </figure>)
}
export default UserCard;