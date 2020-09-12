import React, {useState} from 'react';

function mathCalculation( num1,num2, op )
{
    
    let num3 =0.0;
    console.log("op is"+ op+ " "+ num1 + " "+ num2);
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
        console.log(newInputs);

        setNewResult(mathCalculation(newInputs.newInput1, newInputs.newInput2, newInputs.newOperation));
        console.log(result);//This console.log returns previous state of result even though it is below the setNewResult() in the flow
        
        //Clear the input fields
        setNewInputs(  {newInput1: '',newInput2: '', newOperation: newInputs.newOperation} );        
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
                    <strong> Result: {result} </strong>
                </p>
                
            </form>
        </>
    );
    
}

export default Calculator;