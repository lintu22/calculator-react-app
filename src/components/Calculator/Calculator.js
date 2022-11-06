import React from "react";
import Button from "./../Button/Button";
import Display from "../Display/Display";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        // set the initial display to 0
        this.state = {
            numberInput: ''
        }
        // bind this
        this.handleNumberClick = this.handleNumberClick.bind(this);

    }

    handleNumberClick (number) {
        
        // Update the string with the number
        this.setState({ numberInput: this.state.numberInput + number })

    }


    render () {
        return(
            <div className="container mt-6 border rounded-lg border-slate-400 bg-slate-300 p-7 mx-auto grid grid-cols-3 gap-3 max-w-sm">
                <Display
                    output={this.state.numberInput} 
                />
                
                <Button 
                    className="bg-slate-500"
                    number={1}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={2}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={3}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={4}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={5}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={6}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={7}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={8}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={9}
                    onClick={this.handleNumberClick}
                />
                <Button 
                    number={0}
                    onClick={this.handleNumberClick}
                />
            </div>
        );
    }
}

export default Calculator;