import React, { useState } from "react";

function FormEx()
{
    const[Name,setName] =useState("");

    const submitButton=(event)=>
    {
        event.preventDefault();
        alert('Name is successfully entered: ${Name}');
    }


    return(
        <form onSubmit  ={submitButton}>
            <label>Name:
            <input type="text" value={Name} onChange={(e)=> setName(e.target.value)}></input>
        
        </label>
        <input type="submit"/>
        </form>
    );
}
export default FormEx;