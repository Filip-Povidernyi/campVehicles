import { useEffect } from 'react'
import { fetchAllVehicles } from '../../api/fetchVehicles'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllVehicles } from '../../redux/selectors'
import css from './style.module.css';
import Filters from '../../components/Filters/Filters';
import CatalogCardList from '../../components/CatalogCardList/CatalogCardList';



const Catalog = () => {

    const dispatch = useDispatch();
    const data = useSelector(selectAllVehicles);    

    useEffect(() => {
        dispatch(fetchAllVehicles());
    }, [dispatch])

    console.log('data', data);

    return (
        <section className={css.catalogSection}>
            <Filters />
            <CatalogCardList data={data} />
        </section>
    );
};


export default Catalog;