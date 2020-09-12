import React, {useState} from 'react';

// Citation
// https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
// Although I knew split() method will help to split the string but I was not sure how to make a function for multiple separatore. This function can be used for any number and any new separators. Just need to change tokens array for different set of separators. Also manipulated it so separators become part of output array
function getIndividualInputs( inputString )
{
    const tokens = ['+', '-', '*', '/'];
    // const tempChar = tokens[0]; // We can use the first token as a temporary join character
    for(var i = 1; i < tokens.length; i++){
        inputString = inputString.split(tokens[i]).join(','+ tokens[i]+ ',');
    }
    inputString = inputString.split(',');
    console.log( inputString );
    return inputString;
    

}
// End Citation
    function mathCalculation( expression )
    {
        getIndividualInputs(expression);
        return 8;
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