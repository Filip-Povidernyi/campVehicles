import css from './style.module.css';
import { equipment } from './constants';
import { nanoid } from '@reduxjs/toolkit';
import Icon from '../Icon/Icon';



const Equipment = ({ card }) => {

    return (
        <ul className={css.categoriesList}>
            {equipment.map(item => (card[item.name] ?
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
            : null))}
        </ul>
    );
};

export default Equipment;