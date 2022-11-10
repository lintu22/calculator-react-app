import React from "react";
import ButtonNumber from "./../Button/ButtonNumber";
import ButtonOperator from "./../Button/ButtonOperator";
import ButtonFunction from "./../Button/ButtonFunction";
import Display from "../Display/Display";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberInput: '',
            operator: '',
            fullInput: ``,
            numberStorage: []
        }
        // bind this
        this.handleNumberClick = this.handleNumberClick.bind(this);
        this.handleOperator = this.handleOperator.bind(this);

    }

    handleNumberClick (number) {
        // Update the string with the number
        this.setState({ numberInput: this.state.numberInput + number })
    }

    handleOperator (operator) {

        this.setState({
            numberStorage: [this.state.numberInput],
            numberInput: '',
            operator: operator
        })

    }


    render () {
        return(
            <div className="container mt-6 border rounded-lg border-slate-400 bg-slate-300 p-7 mx-auto grid grid-cols-4 gap-3 max-w-sm">
                <Display
                    output={this.state.numberInput} 
                />
                <ButtonNumber 
                    number={1}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={2}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={3}
                    onClick={this.handleNumberClick}
                />
                <ButtonOperator 
                    operatorText='+'
                    operator='add'
                    onClick={this.handleOperator}
                />
                <ButtonNumber 
                    number={4}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={5}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={6}
                    onClick={this.handleNumberClick}
                />
                <ButtonOperator 
                    operatorText='-'
                    operator='subtract'
                    onClick={this.handleOperator}
                />
                <ButtonNumber 
                    number={7}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={8}
                    onClick={this.handleNumberClick}
                />
                <ButtonNumber 
                    number={9}
                    onClick={this.handleNumberClick}
                />
                <ButtonOperator 
                    operatorText='×'
                    operator='multiply'
                    onClick={this.handleOperator}
                />
                <ButtonNumber 
                    number={0}
                    onClick={this.handleNumberClick}
                />
                <ButtonFunction />
            </div>
        );
    }
}

export default Calculator;