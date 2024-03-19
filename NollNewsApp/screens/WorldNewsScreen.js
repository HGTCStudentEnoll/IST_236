import { List } from '../components/List';
import { NEWS } from '../data/dummy_data'; 

//Function creating CatNewsScreen to display news related to world news.
function WorldNewsScreen(){
    const type = "world"
    const displayedNews = NEWS.filter((ListItem) => {
        return ListItem.type === type;
    })

    //Returns displayedNews.
    return <List items = {displayedNews} />;
}

//Exports WorldNewsScreen.
export default WorldNewsScreen;