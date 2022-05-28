import React from "react";
import Button from "./../Button/Button"

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
        }
    }
    render () {
        return(
            <div>
                <Button 
                    value='1'
                    onClick={(value) => this.state.data.push(value)}
                />
            </div>
        );
    }
}

export default Calculator;