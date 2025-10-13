import css from './style.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectError, selectPerPage } from '../../redux/selectors';
import VehiclesCard from '../VehiclesCard/VehiclesCard';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';



const CatalogCardList = ({data, navId}) => {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const totalItems = data.length;
    const perPage = useSelector(selectPerPage);
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(totalItems / perPage);

    const handleClick = () => {
        setPage(prevState => prevState + 1);
    };

    
    return (
        <div className={css.list}>
            {isLoading && !error && <Loader />}
            {data &&
            <ul className={css.cardList}>
                {data.slice(0, page*perPage).map(card => (
                    <VehiclesCard key={nanoid()} card={card} navId={navId} />
                ))}
            </ul>}
            { page < totalPages && <Button type='button' className={css.buttonReset} handleClick={handleClick}>Load More</Button>}
        </div>
    );
};

export default CatalogCardList;