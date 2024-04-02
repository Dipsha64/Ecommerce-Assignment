import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";

export function loginUserAPI(userData){
    return new Promise(async(resolve)=>{
        const result = axios.post(loginRoute,userData);
        resolve(result);
    })
}

export function signOut(){
    return new Promise(async(resolve)=>{
        resolve({data : 'Successfully Logout'});
    })
}