import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">    
            <div className='calculator'>
                <div className='calculator-display'>0</div>
                <div className='calculator-keypad'>
                    <div className='key-set1'>
                        <div className='function-keys'>
                            <button className='keys'>A/C</button>
                            <button className='keys'>±</button>
                            <button className='keys'>%</button>
                        </div>
                        <div className='numeric-keys'>
                            <button className='keys'>9</button>
                            <button className='keys'>8</button>
                            <button className='keys'>7</button>
                            <button className='keys'>6</button>
                            <button className='keys'>5</button>
                            <button className='keys'>4</button>
                            <button className='keys'>3</button>
                            <button className='keys'>2</button>
                            <button className='keys'>1</button>
                            <button className='keys key-0'>0</button>
                            <button className='keys'>•</button>
                        </div>
                    </div>
                    <div className='key-set2'> 
                        <div className='operator-keys'>
                            <button className='keys'>÷</button>
                            <button className='keys'>*</button>
                            <button className='keys'>-</button>
                            <button className='keys'>+</button>
                            <button className='keys'>=</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
