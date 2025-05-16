

const Button = ({ text , style, icon}) => {

    return (
        <button
            // className=""
            className={style}
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
