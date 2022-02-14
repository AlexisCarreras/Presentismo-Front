import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


interface prop{
    text:string,
    setText:(value:string)=>void,
}


export const TextBoxUpdate = ({text,setText}:prop) => {


    const [error,setError]= useState(false)
    const handleInputChange=(texto:any)=>{
        setText(texto.target.value);
        console.log(texto.target.value)
    }

 
    return (
     
        <TextField 
        id="standard-basic" 
        label="Descripción" 
        value={text}
        required
        onChange={handleInputChange}
        error={error}
        />
            
           
    )
}