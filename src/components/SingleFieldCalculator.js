import React from 'react';

function SingleFieldCalculator(props)
{
    return ( 
        <>
        <h1>{props.heading}</h1>
            <form >
                <label htmlFor='inputs'>Enter your operation: </label><br/>
                <input type='text' id='inputs'  /><br />
               
                <input type= 'submit' id='calculate'value='Calculate'/>
                <p>
                    <strong> Result:  </strong>
                </p>
                
            </form>
        </>        
     );
}

export default SingleFieldCalculator;