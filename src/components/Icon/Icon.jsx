import sprite from '../../assets/icons/sprite.svg'


const Icon = ({ iconName, width, height, stroke, fill, className, handleClick, value, name }) => {
    return (
        <svg
            className={className}
            width={width}
            value={value}
            height={height}
            fill={fill}
            stroke={stroke}
            name={name}
            onClick={handleClick}
        >
                <use href={`${sprite}#${iconName}`}></use>
        </svg>
    );
};


export default Icon;