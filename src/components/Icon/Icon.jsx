import sprite from '../../assets/icons/sprite.svg'


const Icon = ({ iconName, width, height, stroke, fill, className }) => {
    return (
        <svg className={className} width={width} height={height} fill={fill} stroke={stroke}>
            <use href={`${sprite}#${iconName}`}></use>
        </svg>
    );
};


export default Icon;