import axios from "axios";
import { IP_ADDRESS, PORT } from "../Components/Constant/constants";
import getNewsStore from "./newsStore";
import { NewsItem } from "../types/NewsItem";
import { getNewsCredentials, getUserCredentials } from "./storeUtils";
import  { mmkvAuth } from "./authenticationStore";

class RequestStore {
    

    async addNewsRequest() {
        await axios.post(`http://${IP_ADDRESS}:${PORT}/api/addNews`, {
            user_id: getUserCredentials().id,
            news_content : getNewsCredentials().news_content
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
    async changeUsernameRequest() {
      await axios.post(`http://${IP_ADDRESS}:${PORT}/api/updateUserName` , {
        user_name : getUserCredentials().username,
        user_id: getUserCredentials().id
      })
    }
    async changeNumberRequest() {
      await axios.post(`http://${IP_ADDRESS}:${PORT}/api/updateNumber` , {
        user_phone_number : getUserCredentials().phone,
        user_id: getUserCredentials().id
      })
    }
    async changeEmailRequest() {
      await axios.post(`http://${IP_ADDRESS}:${PORT}/api/updateEmail` , {
        user_email : getUserCredentials().email,
        user_id: getUserCredentials().id
      })
    }
    async changeCountryRequest() {
      await axios.post(`http://${IP_ADDRESS}:${PORT}/api/updateCountry` , {
        user_country : getUserCredentials().country,
        user_id: getUserCredentials().id
      })
    }
}















const requestStore = new RequestStore();
export const getRequestStore = () => requestStore;
export default getRequestStore;
