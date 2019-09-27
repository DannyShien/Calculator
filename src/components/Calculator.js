import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
    // state = {
    //     displayValue: 0
    // }
    constructor(props) {
        super(props); 
        this.state = {
            displayValue: '0'
        }
    }

    inputValue = (digit) => {
        const {displayValue} = this.state

        this.setState({
            displayValue: displayValue === '0' ? String(digit) : displayValue + digit
        })
    }

    inputDot = () => {
        const {displayValue} = this.state

        if (displayValue.indexOf('.') === -1) {
            this.setState({
                displayValue: displayValue + '.' 
            })
        }
    }

    render() {
        const {displayValue} = this.state
        return (
            <div className="App">    
            <div className='calculator'>
                <div className='calculator-display'>{displayValue}</div>
                <div className='calculator-keypad'>
                    <div className='key-set1'>
                        <div className='function-keys'>
                            <button className='calculator-keys'>A/C</button>
                            <button className='calculator-keys'>±</button>
                            <button className='calculator-keys'>%</button>
                        </div>
                        <div className='numeric-keys'>
                            <button className='calculator-keys key-1' onClick={() => this.inputValue(1)}>1</button>
                            <button className='calculator-keys key-2' onClick={() => this.inputValue(2)}>2</button>
                            <button className='calculator-keys key-3' onClick={() => this.inputValue(3)}>3</button>
                            <button className='calculator-keys key-4' onClick={() => this.inputValue(4)}>4</button>
                            <button className='calculator-keys key-5' onClick={() => this.inputValue(5)}>5</button>
                            <button className='calculator-keys key-6' onClick={() => this.inputValue(6)}>6</button>
                            <button className='calculator-keys key-7' onClick={() => this.inputValue(7)}>7</button>
                            <button className='calculator-keys key-8' onClick={() => this.inputValue(8)}>8</button>
                            <button className='calculator-keys key-9' onClick={() => this.inputValue(9)}>9</button>
                            <button className='calculator-keys key-0' onClick={() => this.inputValue(0)}>0</button>
                            <button className='calculator-keys key-•' onClick={() => this.inputDot('.')}>•</button>
                        </div>
                    </div>
                    <div className='key-set2'> 
                        <div className='operator-keys'>
                            <button className='calculator-keys'>÷</button>
                            <button className='calculator-keys'>*</button>
                            <button className='calculator-keys'>-</button>
                            <button className='calculator-keys'>+</button>
                            <button className='calculator-keys'>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Calculator;