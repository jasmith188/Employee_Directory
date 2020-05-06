import axios from "axios";

export default {
    getEmployees(){
        return axios.get("http://randomuser.me/api/?results+100")
    }
}