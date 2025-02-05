import {Link} from "react-router-dom";

import ("./button.scss")

// eslint-disable-next-line react/prop-types
const Button = ({text, type, onClick, className}) => {
    return (
        <div>
            <button
                className={`buttons ${className}`}
                type={type}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;