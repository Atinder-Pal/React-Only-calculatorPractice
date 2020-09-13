import React, {useState} from 'react';
// import './reset.css';
import './Calculator.css'

function mathCalculation( num1,num2, op )
{
    
    let num3 =0.0;    
    switch ( op )
{
        case 'addition':
            num3 = num1 + num2;           
        break;

        case 'subtraction':         
            num3 = num1 - num2;        
        break;

        case 'multiplication':         
            num3 = num1 * num2;       
        break;

        case 'division':
            num3 = num1 / num2;
        break;

        default:         
            num3 = 0;     
        break;
    }
    console.log("num3 is "+ num3);
    return num3;
    
}

function Calculator(props)
{
    //Set up for state of inputs
    const [newInputs, setNewInputs] = useState( {newInput1: '',newInput2:'', newOperation:'addition'});
    const updateInput1 = e =>{
        setNewInputs({newInput1: parseFloat(e.target.value),newInput2: newInputs.newInput2, newOperation: newInputs.newOperation});
    }
    const updateInput2 = e =>{
        setNewInputs({newInput1: newInputs.newInput1,newInput2: parseFloat(e.target.value), newOperation: newInputs.newOperation});
    }
    const updateOperation = e =>{
        setNewInputs({newInput1: newInputs.newInput1,newInput2: newInputs.newInput2, newOperation: e.target.value});
    }
    const [result, setNewResult] = useState( 0 );
    

    //Defining Function for "onSubmit" form event
    const doCalculation = ( e ) => {
        e.preventDefault();     
       
        setNewInputs( newInputs );     
        setNewResult(mathCalculation(newInputs.newInput1, newInputs.newInput2, newInputs.newOperation));
                
        //Clear the input fields
        setNewInputs(  {newInput1: '',newInput2: '', newOperation: newInputs.newOperation} );        
    }
    
    

    return(
        <>
            <h1>{props.heading}</h1>
            <form onSubmit={doCalculation}>
                <div>
                <label htmlFor='input1'>Input 1 </label>
                <input type='number' id='input1' value={newInputs.newInput1} placeholder= 'Operand 1' onChange= {updateInput1} />
                                
                <label htmlFor="operation">
                    <select  id="operation" onChange= {updateOperation}>
                        <option value="addition"> &nbsp;&nbsp; + </option>
                        <option value="subtraction">&nbsp;&nbsp;&nbsp; - </option>
                        <option value="multiplication">&nbsp;&nbsp;&nbsp; * </option>
                        <option value="division">&nbsp;&nbsp;&nbsp; / </option>
                    </select>
                </label>
            
                <label htmlFor='input2'>Input 2 </label><br />
                <input type='number' id='input2' value={newInputs.newInput2} placeholder= 'Operand 2' onChange= {updateInput2}/> 
                </div>
                                   
                <br /><br />

                <input type= 'submit' id='calculate'value='='/>
                <p>
                    <strong> {result} </strong>
                </p>
                
            </form>
        </>
    );
    
}

export default Calculator;