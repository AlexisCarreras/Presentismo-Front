import {  useState } from "react";
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    card: {
        width: '90%',
        marginTop: '5%',
        marginRight: '5%',
        marginLeft: '5%',
        // marginRight: '3rem',
        // marginLeft: '1rem',
    },
    skeleton: {
        width: '90%',
        height:'900px',
        marginTop: '5%',
        marginRight: '5%',
        marginLeft: '5%',
        
    },
    cardHeader: {
        backgroundColor: '#007DC4',
        color: '#FFFF',
        fontSize: '100%',
        textAlign: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    date: {
        color: '#7D7D7D',
        fontSize: '88px',
        padding: '1rem',
    },
    text: {
        color: '#FFFF',
        justifyContent: 'center',
        fontFamily:'"Montserrat", sans-serif',
        marginLeft: '15%',
        marginTop: '98%',
        
    },
});


export const DetailsAdmin = () => {
    
    const classes = useStyles();
            return (
            <Typography className={ classes.card } >
               contenido de molesculas para el administrativo
            </Typography>
           
    )
}