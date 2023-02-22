import axios from "axios"
import AlertService from "../assets/service/alert";
import { ApiConsts } from "./Api_Consts"

async function CreateTodo(){

}
async function For_GET(req){
    try {
        let temp=[];
        await axios.get(`${ApiConsts.base_Url}${req}`).then((res)=>{
            console.log('===>',res);
            temp=[...res?.data]
        }) 
        return temp;       
    } catch (error) {
        AlertService.show('Error==>',JSON?.stringify(error).slice(0,50))
        return []
    }
}
async function For_POST(req,data){
    try {
        await axios.post(`${ApiConsts.base_Url}${req}`,data).then((res)=>{
            console.log('===>',res);
            return true
        }) 
        return false;       
    } catch (error) {
        return false
    }
}

export const API_Calls={
CreateTodo,For_GET,For_POST
}