

const Button = ({ text , style, icon,link}) => {

    return (
        <button
            // className=""
            className={style}
            onClick={link}
        >
            <span>
                {text}
            </span>
            <span>
                {icon}
            </span>
        </button>
    )
}
export default Button;
