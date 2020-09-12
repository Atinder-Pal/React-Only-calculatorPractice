import React, {useState} from 'react';

//Function to split single expression into array of individual operands & operator
// Citation
// https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript
// Although I knew split() method will help to split the string but I was not sure how to make a function for multiple separatore. This function can be used for any number and any new separators. Just need to change tokens array for different set of separators. Also manipulated it so separators become part of output array
function getIndividualInputs( inputString )
{
    let firstNumberIsNegative= false;
    let secondNumberIsNegative =false;
    let finalInput= '';
     //Remove whitespaces from the expression
     inputString = inputString.split(' ').join('');
    if(inputString.match(/^-?\d+(\.\d+)?(\+|-|\*|\/)-?\d+(\.\d+)?$/))
    {
        if(inputString.match(/^-\d+/))
        {
            firstNumberIsNegative=true;           
            
        }
        if(inputString.match(/(\+|-|\*|\/)-\d+(\.\d+)?$/))
        {
            secondNumberIsNegative= true;
        }

        if(firstNumberIsNegative && secondNumberIsNegative)
        {
            const inputString1 = inputString.replace('-', '');
            const indexLast = inputString1.lastIndexOf('-');
            const inputString2 = inputString1.replace(inputString1[indexLast], '');
            finalInput = inputString2;
        }

        else if(firstNumberIsNegative)
        {
            finalInput = inputString.replace('-', '');
            console.log("first number is negative");
        }
        else if(secondNumberIsNegative)
        {
            const indexLast = inputString.lastIndexOf('-');
            console.log(indexLast);
            finalInput = inputString.replace(inputString[indexLast], '');
            console.log(  finalInput);
        }
   
    
        //Declare all the separators for split()
        const tokens = ['+', '-', '*', '/'];    
        
        for(let i = 0; i < tokens.length; i++){
            finalInput = finalInput.split(tokens[i]).join(','+ tokens[i]+ ',');
        }

        finalInput = finalInput.split(',');     
        return finalInput;  
    }
    else{
        alert("invalid input");
    }
     
}
    
    


// End Citation

function mathCalculation( expression )
{   //Assigning values to 3 variables from Array in one shot
    const [operand1,op,operand2] = getIndividualInputs(expression);        
    
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);    
    let num3 =0.0;
    
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
    return num3;
}

function validateInput( s )
{
    s = s.split(' ').join('');
    if(s.match(/^-?\d+(\.\d+)?(\+|-|\*|\/)-?\d+(\.\d+)?$/))
    return true;
    else
    return false;

      
}

function SingleFieldCalculator(props)
{
    //update state of input expression using useState()
    const [newExpression, setNewExpression] = useState( '' );

    //update state of result variable using useState()
    const [newResult, setNewResult] = useState( '' );

    //Defining Function for "onSubmit" form event
    const doCalculation = ( e ) => {
        e.preventDefault();
        //Passing new value to setNewExpression to update the state of input expression
        setNewExpression(newExpression);
        if(validateInput( newExpression ))
        {
            setNewResult(mathCalculation( newExpression ));
            //Clear the input field 
            setNewExpression( '' );
        }
        else{
            alert("invalid operation");
        }
        
        
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