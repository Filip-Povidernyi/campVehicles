import css from './style.module.css';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import { useDispatch, useSelector} from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { toggleFavorite } from '../../redux/favoriteSlice';
import { equipment } from './constants';
import { useLocation, useNavigate } from 'react-router-dom';
import { setNav } from '../../redux/camperDetailsSlice';


const VehiclesCard = ({ card, navId }) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const favorites = useSelector(selectFavorites);
    const isFavorite = favorites?.some(fav => fav.id === card.id);

    const openModal = (id) => {
        dispatch(setNav(navId));
        navigate(`/catalog/${id}/features`, { state: { background: location } });
    };

    return (
        <li className={css.cardItem}>
            <div className={css.card}>
                <div className={css.wrapper}>
                    <img src={card.gallery[0].original} alt={card.name} width='290px' height='310px' />
                </div>
                <div className={css.cardInfo}>
                    <div>
                        <div className={css.favoriteDiv}>
                            <h1>{card.name}</h1>
                            <div className={css.price}>
                                <p className={css.priceTitle}>&#8364;{card.price}.00</p>
                                <Icon
                                    className={css.heart}
                                    width={24}
                                    height={24}
                                    fill={isFavorite ? '#E44848' : 'transparent'}
                                    stroke={isFavorite ? '#E44848' : '#101828'}
                                    iconName='icon-EmptyHeart'
                                    handleClick={()=>dispatch(toggleFavorite(card))}
                                />
                            </div>
                        </div>
                        <div className={css.favorRew}>
                            <div className={css.reviews}>
                                <Icon
                                    className={css.star}
                                    width={16}
                                    height={16}
                                    fill='#ffc531'
                                    stroke='#ffc531'
                                    iconName='icon-star-full'
                                />
                                <p className={css.text}>{card.rating}({card.reviews.length} Reviews)</p>
                            </div>
                            <div className={css.reviews}>
                                <Icon
                                    width={16}
                                    height={16}
                                    fill="transparent"
                                    stroke='#101828'
                                    iconName='icon-map-pin'
                                />
                                <p className={css.text}>{card.location}</p>
                            </div>
                        </div>
                        <div className={css.descr}>
                            <p>{card.description.slice(0, 64)}...</p>
                        </div>
                        <div className={css.categories}>
                            <ul className={css.categoriesList}>
                                {equipment.map(item => (card[item.name] &&
                                    <li className={css.categoriesItem} key={nanoid()}>
                                        <Icon
                                            width="20"
                                            height="20"
                                            stroke='#101828'
                                            fill={item.fill}
                                            iconName={item.icon}
                                        />
                                        <p className={css.label}>{card[item.name]} {item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <Button
                                type="button"
                                className={css.btn}
                                handleClick={() => openModal(card.id)}>
                                Show more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VehiclesCard;