import 'date-fns';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { TextBox } from '../../atoms/Inputs/TextBox/TextBox';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import { ButtonDetails } from '../../atoms/Buttons/Details/ButtonDetails';
import { makeStyles } from '@material-ui/core';


interface data {
    inicio: Date;
    fin: Date;
}

const useStyles = makeStyles({
    buttonPrimary: {
        color: '#FFFF',
        fontSize: '16px',
        marginLeft: '50%',
        marginTop: '10%',
        textTransform: 'none',
        height: '40%'
    },

    inLine: {
        float:'right'
        
    }
})


export const TimerPicker = ({ inicio, fin }: data) => {

    const classes = useStyles();
    const [selectedDateInicio, setSelectedDateInicio] = React.useState<Date | null>(
        new Date(inicio),
    );
    const [selectedDateFin, setSelectedDateFin] = React.useState<Date | null>(
        new Date(fin),
    );

    const [isDisableInicio, setIsDisableInicio] = useState(false);
    const [isDisableFin, setIsDisableFin] = useState(false);

    const handleDateChangeInicio = (date: Date | null) => {
        console.log('inicio');
        try {
            if (date !== null) {
                if (date > inicio && date < fin) {

                    setSelectedDateInicio(date);
                    setIsDisableFin(true);
                } else {
                    setSelectedDateInicio(inicio);
                }
            }
        } catch {
            setSelectedDateInicio(inicio);
        }

    };
    const handleDateChangeFin = (date: Date | null) => {
        console.log('fin');
        try {
            if (date !== null) {
                if (date > inicio && date < fin) {

                    setSelectedDateFin(date);
                    setIsDisableInicio(true);

                } else {
                    setSelectedDateFin(fin);
                }
            }
        } catch {
            setSelectedDateFin(fin);
        }

    };

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

                <Grid>
                    <KeyboardTimePicker
                        disabled={isDisableInicio}
                        margin="normal"
                        id="Inicio"
                        label='Inicio'
                        value={selectedDateInicio}
                        onChange={handleDateChangeInicio}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />

                    <KeyboardTimePicker
                        disabled={isDisableFin}
                        margin="normal"
                        id="Fin"
                        label='Fin'
                        value={selectedDateFin}
                        onChange={handleDateChangeFin}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
            <TextBox />
            <div className={classes.inLine} >
                <ButtonDetails estilo={classes.buttonPrimary} text={'Restablecer'} disabled={false} onClick={() => { }} />
            </div>
            <div className={classes.inLine}>
                <ButtonDetails estilo={classes.buttonPrimary} text={'Guardar'} disabled={false} onClick={() => { }} />
            </div>
        </div>

    );
}