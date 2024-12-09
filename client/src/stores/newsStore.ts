import {computed, observable , runInAction} from "mobx";
import { NewsItem } from "../types/NewsItem";
import getRequestStore from "./requestsStore";
import getLoginStore from "./loginStore";
import { Alert } from "react-native";
import getNavigationStore from "./navigationStore";
import { addNewsUtil, fetchNewsUtil, getNewsCredentials, getUserCredentials } from "./storeUtils";
import { loginStoreText, newsMessage } from "../Components/Constant/constants";

export class NewsStore 
{
    newsList = observable.box<NewsItem[]>([]);
    newsCount = observable.box<number>(0);
    news = observable.box<string> ('');
    date = observable.box<string>('');


    incrementNewsCountByOne = () => {
        runInAction(()=>{
            this.newsCount.set(this.newsCount.get() + 1);
        })
    }

    setNews(news : string) {
        runInAction(() => {
            this.news.set(news);
        })
    }
    setDate(dateParameter : string){
        runInAction(() => {
            this.date.set(dateParameter);
        })
    }
    addNews(news: NewsItem) {
        runInAction(() => {
            let updatednewLIst: NewsItem[] = this.newsList.get();
            updatednewLIst.push(news)
            this.newsList.set(updatednewLIst);
            this.incrementNewsCountByOne();
            this.news.set('');
        })
    }
     newsInformations = async() : Promise<void> => {
        try
        {
          await fetchNewsUtil();      
        } catch ( error ) {
          Alert.alert(newsMessage.Fail.FetchNewsError , `${error}`);
        }
      }
       handleSubmit = async () => {
        if (this.news.get()) {
            try {
                await this.handleAddNews();
                const newsItem: NewsItem = {
                    user_name: getUserCredentials().username,
                    date_of_news: getNewsCredentials().news_date,
                    news_content: getNewsCredentials().news_content
                }
                this.addNews(newsItem);
                Alert.alert(loginStoreText.Success.Sucess, newsMessage.Success.AddNewsError);
                getNavigationStore().goBack();
            } catch ( error ) {
                Alert.alert(newsMessage.Fail.AddNewsError , `${error}`)
            }      
        } else {
            Alert.alert(loginStoreText.Fail.ErrorMessage , newsMessage.Fail.EnterNews);
        }        
    }
     handleAddNews = async () : Promise<void> => {
        try {
            if( getUserCredentials().id !== -1)
            {
              await addNewsUtil();
            }
        } catch ( error ) {
            Alert.alert(newsMessage.Fail.AddNewsError , `${error}`);
        }
    }
    setNewsList(newsArray : NewsItem[] ) {
        runInAction(()=> {
            this.newsList.set(newsArray);
            this.newsCount.set(newsArray.length);
        })
    }
    get newsCountTotal() {
        return this.newsList.get().length;
    }
    
}


const newsStore = new NewsStore();
export const getNewsStore = () => newsStore;
export default getNewsStore;
