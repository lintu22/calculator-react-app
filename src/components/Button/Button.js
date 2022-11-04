const Button = (props) => {

    return (
        <button className='px-10 py-6 text-slate-500 rounded-xl border border-width-2 border-purple-300'
        onClick={() => props.onClick(props.number)}
        >
            {props.number}
        </button>
    )
}

export default Button;