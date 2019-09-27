import React, { Component } from 'react'
import './Calculator.css'
import { PreviousMap } from 'postcss';

class Calculator extends Component {
    // state = {
    //     displayValue: 0
    // }
    constructor(props) {
        super(props); 
        this.state = {
            value: null, 
            displayValue: '0',
            waitingForOperand: false, 
            operator: null
        }
    }

    clearDisplay = () => {
        this.setState({ 
            displayValue: '0'
        })
    }

    toggleSign = () => {
        const {displayValue} = this.state

        this.setState({
            displayValue: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
        })
    }

    inputPercent = () => {
        const {displayValue} = this.state
        const value = parseFloat(displayValue)

        this.setState({ 
            displayValue: String(value / 100)
        })
    }

    inputDigit = (digit) => {
        const {displayValue, waitingForOperand} = this.state

        if (waitingForOperand) {
            this.setState({
                displayValue: String(digit), 
                waitingForOperand: false
            })
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit
            })
        }
    }

    inputDot = () => {
        const {displayValue, waitingForOperand} = this.state

        if (waitingForOperand) {
            this.setState({
                displayValue: '.',
                waitingForOperand: false
            })
        } else if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.',
                waitingForOperand: false 
            })
        }
    }
    

    performOperator = (nextOperator) => {
        const { displayValue, operator, value } = this.state
        const nextValue = parseFloat(displayValue)

        const operations = {
            '/': (prevValue, nextValue ) => prevValue / nextValue,
            '*': (prevValue, nextValue ) => prevValue * nextValue,
            '+': (prevValue, nextValue ) => prevValue + nextValue,
            '-': (prevValue, nextValue ) => prevValue - nextValue,
            '=': (prevValue, nextValue ) => nextValue   
        }

        if (value == null) {
            this.setState({
                value: nextValue
            })
        }   else if (operator) {
            const currentValue = value || 0
            const calculatedValue = operations[operator](currentValue, nextValue)

            this.setState({
                value: calculatedValue, 
                displayValue: String(calculatedValue)
            })
        }    

        this.setState({
            waitingForOperand: true,
            operator: nextOperator
        })
    }

    render() {
        const {displayValue} = this.state
        return (
            <div className="App">    
            <div className='calculator'>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                <div className='calculator-display'>{displayValue}</div>
                <div className='calculator-keypad'>
                    <div className='key-set1'>
                        <div className='function-keys'>
                            <button className='calculator-keys' onClick={() => this.clearDisplay()}>A/C</button>
                            <button className='calculator-keys' onClick={() => this.toggleSign()}>±</button>
                            <button className='calculator-keys' onClick={() => this.inputPercent()}>%</button>
                        </div>
                        <div className='numeric-keys'>
                            <button className='calculator-keys key-1' onClick={() => this.inputDigit(1)}>1</button>
                            <button className='calculator-keys key-2' onClick={() => this.inputDigit(2)}>2</button>
                            <button className='calculator-keys key-3' onClick={() => this.inputDigit(3)}>3</button>
                            <button className='calculator-keys key-4' onClick={() => this.inputDigit(4)}>4</button>
                            <button className='calculator-keys key-5' onClick={() => this.inputDigit(5)}>5</button>
                            <button className='calculator-keys key-6' onClick={() => this.inputDigit(6)}>6</button>
                            <button className='calculator-keys key-7' onClick={() => this.inputDigit(7)}>7</button>
                            <button className='calculator-keys key-8' onClick={() => this.inputDigit(8)}>8</button>
                            <button className='calculator-keys key-9' onClick={() => this.inputDigit(9)}>9</button>
                            <button className='calculator-keys key-0' onClick={() => this.inputDigit(0)}>0</button>
                            <button className='calculator-keys key-•' onClick={() => this.inputDot('.')}>•</button>
                        </div>
                    </div>
                    <div className='key-set2'> 
                        <div className='operator-keys'>
                            <button className='calculator-keys' onClick={() => this.performOperator('/')}>÷</button>
                            <button className='calculator-keys' onClick={() => this.performOperator('*')}>*</button>
                            <button className='calculator-keys' onClick={() => this.performOperator('-')}>-</button>
                            <button className='calculator-keys' onClick={() => this.performOperator('+')}>+</button>
                            <button className='calculator-keys' onClick={() => this.performOperator('=')}>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Calculator;