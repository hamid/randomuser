import { createContext, useState, useEffect } from 'react';
import { AppContextInterface, AppContextPropsInterface} from "./MainContext.type";
import UserApi, { UserApiType, RootObject } from "../api/User.api";

const context = createContext<AppContextInterface>({ loading: false, user:{} });
const AppContext = (props: AppContextPropsInterface)=>{


    //-- Define State
    var [appLoading, setAppLoading] = useState<boolean>(false);
    var [activeUser, setActiveUser] = useState<UserApiType>({} as UserApiType);
    var [activeUserIndex, setActiveUserIndex] = useState<number>(0);

    //-- Define methods
    const UserApiObj = new UserApi();
    const getCurrentUser = async (): Promise<UserApiType> => {
        setAppLoading(true);
        let newUser = {};
        let data: RootObject | Boolean = await UserApiObj.get();
        
        if (data) {
            newUser = (data as RootObject).results[0];
            setActiveUser(newUser);
            let allList = await UserApiObj.getAll();
            if (allList && allList.length){
                console.log(allList.length - 1, activeUserIndex);
                setActiveUserIndex(allList.length-1); // set index to last recently item
            }
        }
        setAppLoading(false);
        return newUser
    };
    const getAllUsers = async (): Promise<RootObject[] | boolean> =>{
        return  await UserApiObj.getAll();
    }
    const getPrevUser = async (): Promise<RootObject> =>{
        console.log(activeUserIndex - 1);
        if (activeUserIndex-1 >=0)
            setActiveUserIndex(activeUserIndex-1);
        let lastItem = {} as RootObject;
        let list =  await UserApiObj.getAll();
            
        if(list && list.length){
            lastItem = list[activeUserIndex-1];
        }
        return lastItem;
    }
    const getNextUser = async (): Promise<RootObject> =>{
        console.log(activeUserIndex +1);
        let list =  await UserApiObj.getAll();
        let lastItem = {} as RootObject;
        if (activeUserIndex+1 && list && list.length-1 > activeUserIndex)
            setActiveUserIndex(activeUserIndex+1);
        if(list && list.length){
            lastItem = list[activeUserIndex+1];
        }
        return lastItem;
    }

    useEffect(()=>{
        
    },[])

    return (
        <context.Provider value={{
            loading: appLoading,
            user:{
                setActiveUser,
                getCurrentUser,
                getAllUsers,
                getPrevUser,
                getNextUser,
                activeUser,
            }
        }}>
            {props.children}
        </context.Provider >
    )
}

export { AppContext };
export default context;