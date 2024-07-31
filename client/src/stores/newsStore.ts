import {computed, observable , runInAction} from "mobx";
import { NewsItem } from "../types/NewsItem";

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
