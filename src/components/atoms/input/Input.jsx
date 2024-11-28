import ("./input.scss")

// eslint-disable-next-line react/prop-types
const Input = ({type, name, placeholder, className}) => {
    return (
        <div className="inputForm">
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} placeholder={placeholder} className={className}/>
        </div>
    );
};

export default Input;