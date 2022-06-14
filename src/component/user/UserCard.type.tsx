import { UserApiType } from "../../api/User.api.type"
export default  interface UserCardType {
    loading  : boolean
    user    ?: UserApiType
}