import { List } from '../components/List';
import { NEWS } from '../data/dummy_data'; 

//Function creating CatNewsScreen to display news related to cats.
function CatNewsScreen(){
    const type = "cats"
    const displayedNews = NEWS.filter((ListItem) => {
        return ListItem.type === type;
    })

    //Returns displayedNews.
    return <List items = {displayedNews} />;
}

//Exports CatNewsScreen.
export default CatNewsScreen;