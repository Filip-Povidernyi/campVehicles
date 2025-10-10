import css from './style.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError } from '../../redux/selectors';
import VehiclesCard from '../VehiclesCard/VehiclesCard';




const CatalogCardList = ({data}) => {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    return (
        <div>
            {data.items ?
            <ul className={css.cardList}>
                {data.items.map(card => (
                    <VehiclesCard card={card} />
                ))}
            </ul> : (isLoading && !error && <h2><b>Vehicles are loading...</b></h2>)}
        </div>
    );
};

export default CatalogCardList;