import { UserApiType, RootObject } from "../api/User.api.type"

export interface AppContextInterface{
    loading : boolean
    user : {
        activeUser    ?: UserApiType
        setActiveUser?: (user: UserApiType) => void
        getCurrentUser?: () => Promise<UserApiType>
        getAllUsers?: () => Promise<RootObject[] | boolean>
        getPrevUser?: () => Promise<RootObject>
        getNextUser?: () => Promise<RootObject>
    }
    
}
export interface AppContextPropsInterface {
    children : JSX.Element
}