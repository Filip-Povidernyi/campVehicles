import { useSelector } from "react-redux";
import CatalogCardList from "../../components/CatalogCardList/CatalogCardList";
import { selectFavorites } from "../../redux/selectors";
import css from './style.module.css';



const Favorites = () => {

    const favorites = useSelector(selectFavorites);
    const navId = '/favorites';
    
    return (
        <div className={css.favorite}>
            {!favorites.length && <h1>No favorites campers</h1> }
            {favorites && <CatalogCardList data={favorites} navId={navId} />}
        </div>
    );
};

export default Favorites;