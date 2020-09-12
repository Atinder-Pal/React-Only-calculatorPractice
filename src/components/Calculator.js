import React, {useState} from 'react';

function mathCalculation( num1,num2, op )
{
    // const num1 = inputParameters.newInput1;
    // const num2 = inputParameters.newInput2;
    // const op =  inputParameters.newOperation;
    let num3 =0;
    console.log("op is"+ op);
    switch ( op )
    {
        case 'addition':
            {
                num3 = num1 + num2;
                console.log(num1 + num2);
            }
        break;

        case 'subtraction':
            {
                num3 = num1 - num2;
            }
        break;

        case 'multiplication':
            {
                num3 = num1 * num2;
            } 
        break;

        case 'division':
            {
                num3 = num1 / num2;
            }
        break;

        default:
            {
                num3 = 0;
            }
        break;
    }
    console.log("num3 is "+ num3);
    return num3;
    
}

function Calculator(props)
{
    //Set up for state of input1
    const [newInputs, setNewInputs] = useState( {newInput1: 0,newInput2:0, newOperation:' '});
    const updateInput1 = e =>{
        setNewInputs({newInput1: e.target.value,newInput2: newInputs.newInput2, newOperation: newInputs.newOperation});
    }
    const updateInput2 = e =>{
        setNewInputs({newInput1: newInputs.newInput1,newInput2: e.target.value, newOperation: newInputs.newOperation});
    }
    const updateOperation = e =>{
        setNewInputs({newInput1: newInputs.newInput1,newInput2: newInputs.newInput2, newOperation: e.target.value});
    }

    //Defining Function for "onSubmit" form event
    const doCalculation = ( e ) => {
        e.preventDefault();
        
        //const newInputsObject = { newInput1: parseInt(document.getElementById('input1').value) , newInput2: parseInt(document.getElementById('input2').value), newOperation: document.getElementById('operation').value}; 
        
        setNewInputs( newInputs );
        console.log(newInputs);
        const result = mathCalculation(newInputs.newInput1, newInputs.newInput2, newInputs.newOperation);
        console.log(result);
        

        //Clear the input fields
        // setNewInputs(  {newInput1: '',newInput2:'', newOperation:' '} );        
    }
    
    

    return(
        <>
            <h1>{props.heading}</h1>
            <form onSubmit={doCalculation}>
                <label htmlFor='input1'>Input 1 </label><br/>
                <input type='number' id='input1' value={newInputs.newInput1} onChange= {updateInput1} /><br />
                                
                <label htmlFor="operation">Choose an operation to perform: <br />
                    <select  id="operation" onChange= {updateOperation}>
                        <option value="addition"> &nbsp;&nbsp; + </option>
                        <option value="subtraction">&nbsp;&nbsp;&nbsp; - </option>
                        <option value="multiplication">&nbsp;&nbsp;&nbsp; * </option>
                        <option value="division">&nbsp;&nbsp;&nbsp; / </option>
                    </select>
                </label><br />
            
                <label htmlFor='input2'>Input 2 </label><br />
                <input type='number' id='input2' value={newInputs.newInput2} onChange= {updateInput2}/>                    
                <br /><br />

                <input type= 'submit' id='calculate'value='Calculate'/>
                <p>
                    <strong> Result: {newInputs.newInput1 +" "+ newInputs.newOperation + " " + newInputs.newInput2 + " " }</strong>
                </p>
                
            </form>
        </>
    );
    
}

export default Calculator;