import ("./button.scss")

// eslint-disable-next-line react/prop-types
const Button = ({text, onClick}) => {
    return (
        <div>
            <button
                id="buttonLogin"
                type="button"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
};

export default Button;