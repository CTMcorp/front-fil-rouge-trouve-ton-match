import ("./input.scss")

// eslint-disable-next-line react/prop-types
const Input = ({type, name, placeholder, className, value, onChange}) => {
    return (
        <div className="inputForm">
            <label htmlFor={name}>{name}</label>
            <input type={type} name={name} placeholder={placeholder} className={className} value={value} onChange={onChange}/>
        </div>
    );
};

export default Input;