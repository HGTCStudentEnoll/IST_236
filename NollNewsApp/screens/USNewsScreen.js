import { List } from '../components/List';
import { NEWS } from '../data/dummy_data'; 

//Function creating USNewsScreen to display news related to US news.
function USNewsScreen(){
    const type = "us"
    const displayedNews = NEWS.filter((ListItem) => {
        return ListItem.type === type;
    })

    //Returns displayedNews.
    return <List items = {displayedNews} />;
}

//Exports CatNewsScreen.
export default USNewsScreen;