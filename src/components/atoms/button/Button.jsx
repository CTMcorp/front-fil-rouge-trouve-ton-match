import {Link} from "react-router-dom";

import ("./button.scss")

// eslint-disable-next-line react/prop-types
const Button = ({text, type, onClick}) => {
    return (
        <div>
            <button
                id="buttonLogin"
                type={type}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;