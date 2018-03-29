import React from 'react';

class Calculator extends React.Component {
    state = {
        answer: 0
    };
    onSubmit = (e) => {
        e.preventDefault();
        const num1 = e.target.elements.num1.value;
        const num2 = e.target.elements.num2.value;
        const operation = e.target.elements.operation.value;
        let result = 0;
        if (operation == '') {
            alert('Please select an operation ')
        } else if (operation == '+') {
            result = parseInt(num1) + parseInt(num2)
        } else if (operation == '-') {
            result = num1 - num2
        } else if (operation == '*') {
            result = num1 * num2
        } else if (operation == '/') {
            result = num1 / num2
        }
        this.setState(() => ({ answer: result }));
    };
    render() {
        return (
            <div className='container-fluid'>
                <div className='header'>
                    <h1 className="text-center">Simple Calculator Application In Reactjs</h1>
                    <h3 className="text-center">By Amir Ali</h3>
                </div>
                <form className='form-horizontal' onSubmit={this.onSubmit}>
                    <div className='container-fluid form'>
                        <input type='number' required id='num1' placeholder='Enter 1st Number' />
                        <input type='number' required id='num2' placeholder='Enter 2nd Number' />
                        <select id='operation'>
                            <option label='Choose Operation on these numbers'></option>
                            <option label='Add these Numbers'>+</option>
                            <option label='Subtract these Numbers'>-</option>
                            <option label='Multiply these Numbers'>*</option>
                            <option label='Divide these Numbers'>/</option>
                        </select>
                        <button type='submit' className='btn btn-info'>Calculate</button>
                        <input type='number' id="answer" placeholder='Answer will be here' value={this.state.answer} />
                    </div>

                </form>
            </div>
        );
    };
};
export default Calculator;

