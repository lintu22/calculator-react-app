import React from "react";
import Button from "./../Button/Button";
import Display from "../Display/Display";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            numberInput: '0'
        }

        this.handleNumberClick = this.handleNumberClick.bind(this);

    }

    handleNumberClick (number) {

        let numberInputState = this.state.numberInput; 
        
        if (numberInputState === '0') {
            this.setState({numberInput: numberInputState = ''})
        }
        this.setState({ numberInput: numberInputState + number })

    }



    render () {
        return(
            <div className="container grid grid-cols-3 gap-3 max-w-sm">
                <Display
                output={this.state.numberInput} />
                
                <Button 
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