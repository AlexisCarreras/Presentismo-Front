
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ButtonDetails } from '../../Buttons/Details/ButtonDetails';
import { setTextRange } from 'typescript';
import { HolidayVillage } from '@mui/icons-material';
import { useState } from 'react';

const useStyles = makeStyles({
    buttonPrimary: {
        color: '#FFFF',
        fontSize: '16px',
        marginLeft: '90%',
        textTransform: 'none',
        height: '40%'
    }
})
interface prop{
    text:string,
    setText:(value:string)=>void,
}


export const TextBox = ({text,setText}:prop) => {

    const classes = useStyles();
    const [error,setError]= useState(false)
    const handleInputChange=(texto:any)=>{
        setText(texto.target.value);
        
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