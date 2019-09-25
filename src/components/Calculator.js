import React, { Component } from 'react'
import './Calculator.css'

class Calculator extends Component {
    state = {
        displayValue: 0
    }
    // constructor(props) {
    //     super(props); 
    //     this.state = {
    //         displayValue: 0
    //     }
    // }


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
                            <button className='calculator-keys key-1'>1</button>
                            <button className='calculator-keys key-2'>2</button>
                            <button className='calculator-keys key-3'>3</button>
                            <button className='calculator-keys key-4'>4</button>
                            <button className='calculator-keys key-5'>5</button>
                            <button className='calculator-keys key-6'>6</button>
                            <button className='calculator-keys key-7'>7</button>
                            <button className='calculator-keys key-8'>8</button>
                            <button className='calculator-keys key-9'>9</button>
                            <button className='calculator-keys key-0'>0</button>
                            <button className='calculator-keys key-•'>•</button>
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