import axios from "axios";
import { IP_ADDRESS, PORT } from "../Components/Constant/constants";
import getLoginStore from "./loginStore";
import getNewsStore from "./newsStore";
import { NewsItem } from "../types/NewsItem";

class RequestStore {
    

    async addNewsRequest() {
        await axios.post(`http://${IP_ADDRESS}:${PORT}/api/addNews`, {
            user_id: getLoginStore().user_id.get(),
            news_content : getNewsStore().news.get()
        });
    };
    async fetchNewsRequest() {
        const response = await axios.post<NewsItem[]>(`http://${IP_ADDRESS}:${PORT}/api/news`);
        getNewsStore().setNewsList(response.data);   
    };

    async loginRequest() {
        const response =
         await axios.post(
            `http://${IP_ADDRESS}:${PORT}/api/loginUser`,
            {
              user_email: getLoginStore().user_email.get(),
              user_password: getLoginStore().user_password.get(),
            },
            {
              headers: {
                Authorization: `Bearer ` 
              }
            }
          );
          return response;
    }

    async profileFetchRequest() {
        const response = await axios.post(`http://${IP_ADDRESS}:${PORT}/api/getUserProfileData` , {
            user_email : getLoginStore().user_email.get(),
            user_name : getLoginStore().user_name.get(),
            user_phone_number : getLoginStore().user_phone_number.get(),
            user_country : getLoginStore().user_country.get(),
        });
        return response;
    }

    async signInRequest() {
        const response = await axios.post(`http://${IP_ADDRESS}:${PORT}/api/createUser` , {
            user_email : getLoginStore().user_email.get(),
            user_name: getLoginStore().user_name.get(),
            user_password: getLoginStore().user_password.get(),
            user_phone_number : getLoginStore().user_phone_number.get(),
            user_country : getLoginStore().user_country.get()
          });
        return response;

    }
}














const requestStore = new RequestStore();
export const getRequestStore = () => requestStore;
export default getRequestStore;
