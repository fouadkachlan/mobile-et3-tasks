import axios from "axios";
import { IP_ADDRESS, PORT } from "../Components/Constant/constants";
import getNewsStore from "./newsStore";
import { NewsItem } from "../types/NewsItem";
import { getUserCredentials } from "./storeUtils";
import  { mmkvAuth } from "./authenticationStore";

class RequestStore {
    

    async addNewsRequest() {
        await axios.post(`http://${IP_ADDRESS}:${PORT}/api/addNews`, {
            user_id: getUserCredentials().id,
            news_content : getNewsStore().news.get()
        }, {
          headers: {
            Authorization: `Bearer ${mmkvAuth.getString('authToken')}`
          }
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
              user_email: getUserCredentials().email,
              user_password: getUserCredentials().password
            }
          );
          return response;
    }

    async profileFetchRequest() {
        const response = await axios.post(`http://${IP_ADDRESS}:${PORT}/api/getUserProfileData` , {
          user_email : getUserCredentials().email
        } , {
          headers: {
            Authorization: `Bearer ${mmkvAuth.getString('authToken')}`
          }
        });
        return response;
    }

    async signInRequest() {
        const response = await axios.post(`http://${IP_ADDRESS}:${PORT}/api/createUser` , {
            user_email : getUserCredentials().email,
            user_name: getUserCredentials().username,
            user_password: getUserCredentials().password,
            user_phone_number : getUserCredentials().phone,
            user_country : getUserCredentials().country
          });
        return response;

    }
}














const requestStore = new RequestStore();
export const getRequestStore = () => requestStore;
export default getRequestStore;
