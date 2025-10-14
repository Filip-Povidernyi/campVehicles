import React from "react";


const Input = React.forwardRef(
    ({ className, name, type, value, checked, handleChange, id, placeholder, ...rest }, ref) => {
    return (
        <input
            ref={ref}
            className={className}
            name={name}
            type={type}
            value={value}
            checked={checked}
            onChange={handleChange}
            id={id}
            placeholder={placeholder}
            {...rest}
        />
    );
});


export default Input;