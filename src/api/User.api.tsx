import { RootObject } from "./User.api.type";
import LS from "../util/LocalStorage";
export * from "./User.api.type";

export default class UserApi {

    key = 'users';

    get = async (): Promise<RootObject | boolean> =>{
        try {
            let result = await fetch('https://randomuser.me/api/')
            if (result){
                let resultObj =  await result.json();
                LS.push(this.key,resultObj);
                return resultObj;
            }
            return  await false;
        } catch (e) {
            console.log("Error in fetch data", e);
            return  await false;
        }
    }


    getAll = async (): Promise<RootObject[]> =>{
        return LS.get(this.key);
    }

}


