import React, {useState} from 'react';


function Calculator(props)
{
    //Set up for state of input1
    const [newInput1, setNewInput1] = useState( '' );

    //Defining Function for "onSubmit" form event
    const doCalculation = ( e ) => {
        e.preventDefault();

        setNewInput1( document.getElementById('input1').value );
    }

    return(
        <>
            <h1>{props.heading}</h1>
            <form onSubmit={doCalculation}>
                <label htmlFor='input1'>Input 1 </label><br/>
                <input type='number' id='input1' /><br />
                                
                <label htmlFor="operation">Choose an operation to perform: <br />
                    <select  id="operation">
                        <option value="addition"> &nbsp;&nbsp; + </option>
                        <option value="subtraction">&nbsp;&nbsp;&nbsp; - </option>
                        <option value="multiplication">&nbsp;&nbsp;&nbsp; * </option>
                        <option value="division">&nbsp;&nbsp;&nbsp; / </option>
                    </select>
                </label><br />
            
                <label htmlFor='input2'>Input 2 </label><br />
                <input type='number' id='input2'/>                    
                <br /><br />

                <input type= 'submit' id='calculate'value='Calculate'/>
                <p>
                    <strong> Result:{newInput1}</strong>
                </p>
            </form>
        </>
    );
    
}

export default Calculator;