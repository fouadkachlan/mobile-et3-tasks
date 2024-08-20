import {computed, observable , runInAction} from "mobx";
import { NewsItem } from "../types/NewsItem";
import getRequestStore from "./requestsStore";
import getLoginStore from "./loginStore";
import { Alert } from "react-native";
import getNavigationStore from "./navigationStore";

class NewsStore 
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
          await getRequestStore().fetchNewsRequest()      
        } catch ( error ) {
          console.error("Failed Fetching News Information" , error);
        }
      }
       handleSubmit = async () => {
        if (getNewsStore().news.get()) {
            try {
                await this.handleAddNews();
                const newsItem: NewsItem = {
                    user_name: getLoginStore().user_name.get(),
                    date_of_news: getNewsStore().date.get(),
                    news_content: getNewsStore().news.get()
                }
                this.addNews(newsItem);
                Alert.alert('Success', 'News added successfully');
                getNavigationStore().goBack();
            } catch ( error ) {
                console.log("Error in handling add news!" , error)
            }      
        } else {
            Alert.alert('Error' , 'Please Enter the news');
        }        
    }
     handleAddNews = async () : Promise<void> => {
        try {
            if( getLoginStore().user_id.get() !== -1)
            {
              await getRequestStore().addNewsRequest();
            }
        } catch ( error ) {
            console.error("Error while adding News" , error);
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
