import React, {useState} from 'react';

// Citation
// https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
// Although I knew split() method will help to split the string but I was not sure how to make a function for multiple separatore. This function can be used for any number and any new separators. Just need to change tokens array for different set of separators. Also manipulated it so separators become part of output array
function getIndividualInputs( inputString )
{
    inputString = inputString.split(' ').join('');
    const tokens = ['+', '-', '*', '/'];    
    for(let i = 0; i < tokens.length; i++){
        inputString = inputString.split(tokens[i]).join(','+ tokens[i]+ ',');
    }
    inputString = inputString.split(','); 
    
    console.log( inputString );
    return inputString;   

}
// End Citation

function mathCalculation( expression )
{
    const [operand1,op,operand2] = getIndividualInputs(expression);        
    
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);
    console.log(num1 + " "+ op + " " + num2);

    let num3 =0.0;
    console.log("op is"+ op+ " "+ num1 + " "+ num2);
    switch ( op )
    {
        case '+':
            num3 = num1 + num2;           
        break;

        case '-':         
            num3 = num1 - num2;        
        break;

        case '*':         
            num3 = num1 * num2;       
        break;

        case '/':
            num3 = num1 / num2;
        break;

        default:         
            num3 = 0;     
        break;
    }
    console.log("num3 is "+ num3);
    return num3;
}

function SingleFieldCalculator(props)
{
    const [newExpression, setNewExpression] = useState( '' );
    const [newResult, setNewResult] = useState( '' );
    //Defining Function for "onSubmit" form event
    const doCalculation = ( e ) => {
        e.preventDefault();

        setNewExpression(newExpression);

        setNewResult(mathCalculation( newExpression ));

        //Clear the input field
        setNewExpression( '' );
    }

    return ( 
        <>
            <h1>{props.heading}</h1>
            <form onSubmit = {doCalculation}>
                <label htmlFor='inputs'>Enter your operation: </label><br/>
                <input type='text' id='inputs' value={newExpression} onChange={e => {setNewExpression( e.target.value )} } /><br />
               
                <input type= 'submit' id='calculate'value='Calculate'/>
                <p>
                    <strong> Result: {newResult}</strong>
                </p>
                
            </form>
        </>        
     );
}

export default SingleFieldCalculator;