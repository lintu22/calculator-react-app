
const defaultClasses = 'h-24 w-auto flex items-center justify-end text-5xl col-span-3 text-white bg-slate-800 border rounded-xl py-2 px-4 '

const Display = (props) => {

    return(
        <div className={defaultClasses + props.className}
        >
        {props.output === '' ? '0' : props.output}
        </div>
    )
}

export default Display;