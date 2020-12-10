import React, { Component } from 'react';

class Calculator extends Component {

    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            output: 0,
            operator: '+'
        }
    }

    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value) });
    }

    changeOperator = (e) => {
        this.setState({ operator: e.target.value})
    }

    calculate = () => {
        if (this.state.operator === '+') {
            const sum = this.state.num1 + this.state.num2
            this.setState({ output: sum })
        } else if (this.state.operator === '-') {
            const difference = this.state.num1 - this.state.num2
            this.setState({ output: difference })
        } else if (this.state.operator === '*') {
            const product = this.state.num1 * this.state.num2
            this.setState({ output: product })
        } else if (this.state.operator === '/') {
            const quotient = this.state.num1 / this.state.num2
            this.setState({ output: quotient })
        }
            
    }

    render() {

        return (
            <div className="container">
                <h1>Calculate with React!</h1>
                
                <div className="add">
                    <input type="number"
                        name="num1"
                        placeholder="Enter your first number"
                        value={this.state.num1}
                        onChange={(e) => this.setNum(e, 'num1')}
                    />
                    {/* <input type="text"
                        placeholder='Enter operator'
                        value={this.state.operator}
                        onChange={this.changeOperator} /> */}
                    <select onChange={this.changeOperator}>
                        <option>+</option>
                        <option>-</option>
                        <option>*</option>
                        <option>/</option>
                    </select>
                    <input type="number"
                        name="num2"
                        placeholder="Enter your second number"
                        value={this.state.num2}
                        onChange={(e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={this.calculate}>=</button>
                    <h3>Results go here!</h3>
                    <h3>{this.state.output}</h3>
                </div>
            </div>
        )
    }
}

export default Calculator;