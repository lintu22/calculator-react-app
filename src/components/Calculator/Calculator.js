import React from "react";
import Button from "./../Button/Button"

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            input: [],
        }

    }

    render () {
        return(
            <div>
                <Button 
                    number={1}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={2}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={3}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={4}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={5}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={6}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={7}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={8}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={9}
                    onClick={(number) => this.state.input.push(number)}
                />
                <Button 
                    number={0}
                    onClick={(number) => this.state.input.push(number)}
                />
            </div>
        );
    }
}

export default Calculator;