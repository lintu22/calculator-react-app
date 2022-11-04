



const Display = (props) => {

    return(
        <div className="h-20 w-auto text-7xl col-span-3 text-slate-500 bg-purple-300 border">
            {props.output}
        </div>
    )
}

export default Display;