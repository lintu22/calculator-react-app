import React from "react";
import "./Button.css"

class Button extends React.Component {

    

    render () {
        return (
            <button 
            className="px-10 py-6 text-slate-500 rounded-xl border border-width-2 border-purple-300"
            onClick={() => this.props.onClick(this.props.number)}
            >
                {this.props.number}
            </button>
        )
    }
}

export default Button;