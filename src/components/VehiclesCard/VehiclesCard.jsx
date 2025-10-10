import css from './style.module.css';
import { nanoid } from '@reduxjs/toolkit';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';



const VehiclesCard = ({ card }) => {
    
     const equipment = [
        { icon: 'icon-Users', name: 'adults', title: 'adults', fill: 'transparent'},
        { icon: 'icon-gearbox', name: 'transmission', title: '', fill: 'transparent'},
        { icon: 'icon-wind', name: 'AC', title: 'AC', fill: '#101828'},
        { icon: 'icon-tank', name: 'engine', title: '', fill: '#101828'},
        { icon: 'icon-kitchen', name: 'kitchen', title: 'kitchen', fill: 'transparent'},
        { icon: 'icon-bed', name: 'bads', title: 'beds', fill: 'transparent'},
        { icon: 'icon-air-conditioner', name: 'conditioner', title: 'Air conditioner', fill: 'transparent'},
        { icon: 'icon-cd', name: 'CD', title: 'CD', fill: 'transparent'},
        { icon: 'icon-radio', name: 'radio', title: 'Radio', fill: 'transparent'},
        { icon: 'icon-oven', name: 'hob', title: 'hob', fill: 'transparent'},
        { icon: 'icon-toilet', name: 'toilet', title: 'Toilet', fill: 'transparent'},
        { icon: 'icon-shower', name: 'bathroom', title: 'Shower', fill: 'transparent'},
        { icon: 'icon-freezer', name: 'refrigerator', title: 'Freezer', fill: 'transparent'},
        { icon: 'icon-gas', name: 'gas', title: 'Gas', fill: '#101828'},
        { icon: 'icon-water', name: 'water', title: 'Water', fill: 'transparent'},
        { icon: 'icon-microwave', name: 'microwave', title: 'Microwave', fill: 'transparent'}
    ]

    return (
        <li key={nanoid()} className={css.cardItem}>
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
                                    fill='transparent'
                                    stroke='#101828'
                                    iconName='icon-EmptyHeart'
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
                            <Button type="button" className={css.btn}>Show more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VehiclesCard;