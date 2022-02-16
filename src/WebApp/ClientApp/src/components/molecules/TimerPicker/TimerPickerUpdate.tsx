import 'date-fns';
import { useContext, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core';

import { ButtonDetails } from '../../atoms/Buttons/Details/ButtonDetails';
import { TextBox } from '../../atoms/Inputs/TextBox/TextBox';
import { TextBoxUpdate } from '../../atoms/Inputs/TextBox/TextBoxUpdate';




interface data {
    inicio: Date;
    fin: Date;
    setInicio: (value:any)=> void;
}

const useStyles = makeStyles({

    inLine: {
        width: '100%'
    },

    root: {
        float: 'left',
        height: '50%',
        width: '50%',
        color: '#857b80',

    },
    buttonStyleGuardar: {
        marginTop: '8%',
        float: 'right',
        backgroundColor: '#007DC4',
        color: '#FFFFFF',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        fontFamily: '"Montserrat", sans-serif',
        '&:hover': {
            backgroundColor: '#F6921E'
        }
    },
    description: {
        paddingLeft: '5%',
        marginTop: '4.1%',
        width: '120%'
    },
    buttons: {
        display: 'flex',

    },

})


export const TimerPickerUpdate = ({ inicio, fin,setInicio }: data) => {

    const classes = useStyles();
    const [inicioTemp, setInicioTemp] = useState(inicio);
    const [descripcion, setDescripcion] = useState('');
    const handleDateChangeInicio = (date: Date | null) => {
        console.log('inicio' + date);
        try {
            if (date !== null) {
                if (date < fin) {

                    setInicioTemp(date);
                    setInicio(date);
                    
                } else {
                    setInicio(inicio);
                    setInicioTemp(inicio);
                }
            }
        } catch {
            setInicioTemp(inicio);
            setInicio(inicio);
        }

    };


    const botones = () => {


        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                    margin="normal"
                    id="Inicio"
                    label='Inicio'
                    value={inicioTemp}
                    onChange={handleDateChangeInicio}
                    KeyboardButtonProps={{
                        'aria-label': 'change time',
                    }}
                />
            </MuiPickersUtilsProvider>
        )
    }

    return (

        <>{botones()}</>
    );
}