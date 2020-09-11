import React from 'react';

function Calculator()
{
    return(
        <>
            <h1>Welcome  to my Calculator App</h1>
            <form>
                <label htmlFor='input1'>Input 1 </label><br/>
                <input type='text' id='input1'/><br />
                                
                <label htmlFor="operation">Choose an operation to perform: <br />
                    <select  id="operation">
                        <option value="addition"> &nbsp;&nbsp; + </option>
                        <option value="subtraction">&nbsp;&nbsp;&nbsp; - </option>
                        <option value="multiplication">&nbsp;&nbsp;&nbsp; * </option>
                        <option value="division">&nbsp;&nbsp;&nbsp; / </option>
                    </select>
                </label><br />
            
                <label htmlFor='input'>Input 2 </label><br />
                <input type='text' id='input2'/> 
                   
                <br /><br />
                <input type= 'submit' id='calculate'value='Calculate'/>
                <p>
                    <strong> Result:</strong>
                </p>
            </form>
        </>
    );
    
}

export default Calculator;