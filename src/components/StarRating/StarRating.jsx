import { nanoid } from "@reduxjs/toolkit";
import Icon from "../Icon/Icon";
import css from "./style.module.css";

const StarRating = ({ rating = 0, totalStars = 5 }) => {
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        if (i <= Math.floor(rating)) {
        // Повна зірка
        stars.push(
        <Icon
            key={nanoid()}
            iconName="icon-star-full"
            width={16}
            height={16}
            fill="#FFC531"
            stroke="#FFC531"
        />
        );
        } else if (i - rating <= 0.5 && i - rating > 0) {
        // Половинка
        stars.push(
        <Icon
            key={nanoid()}
            iconName="icon-star-half"
            width={16}
            height={16}
            fill="#FFC531"
            stroke="#FFC531"
        />
      );
        } else {
        // Порожня зірка
        stars.push(
        <Icon
            key={nanoid()}
            iconName="icon-star-full"
            width={16}
            height={16}
            fill="#DADDE1"
            stroke="#DADDE1"
        />
      );
    }
    };

    return <div className={css.starsCont}>{stars}</div>;
};

export default StarRating;
