const defaultClasses = 'w-full p-4 text-xl rounded-xl border border-width-2 bg-white border-slate-400 '

const ButtonOperator = (props) => {

    return (
        <button 
            className={defaultClasses + props.className}
            onClick={() => props.onClick(props.operator)}
        >
            {props.operatorText}
        </button>
    )
}

export default ButtonOperator;