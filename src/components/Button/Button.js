import React from "react";
import "./Button.css"

class Button extends React.Component {

    

    render () {
        return (
            <button className="px-10 py-6 text-slate-500 rounded-xl border border-width-2 border-purple-300"
            onClick={() => this.props.onClick(this.props.value)}
            >
                {this.props.value}
            </button>
        )
    }
}

export default Button;