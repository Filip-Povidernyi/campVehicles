const Input = ({className, name, type, value, checked, handleChange, id, placeholder}) => {
    return (
        <input
            className={className}
            name={name}
            type={type}
            value={value}
            checked={checked}
            onChange={handleChange}
            id={id}
            placeholder={placeholder}
        />
    );
};


export default Input;