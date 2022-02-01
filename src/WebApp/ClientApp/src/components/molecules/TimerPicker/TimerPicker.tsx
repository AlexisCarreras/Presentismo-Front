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
import { ButtonGroupDetail } from '../../molecules/ButtonsGroup/ButtonGroupDetail';
import { makeStyles } from '@material-ui/core';
import { SelectDetails } from '../../atoms/Select/SelectDetails';



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
        height: '40%',
        backgroundColor: '#007dc4',
        '&:hover': {
            backgroundColor: '#F6921E'
        }
    },

    inLine: {
        alignItems: 'center'
    }
})


export const TimerPicker = ({ inicio, fin }: data) => {

    const classes = useStyles();

    const [inicioTemp,setInicioTemp]=useState(inicio);
    const [finTemp,setFinTemp]=useState(inicio);

    const [lugarDeTrabajo,setLugarDeTrabajo] = useState("");
    const [descripcion,setDescripcion] = useState("");

    const [isDisableInicio, setIsDisableInicio] = useState(false);
    const [isDisableFin, setIsDisableFin] = useState(false);

    const handleDateChangeInicio = (date: Date | null) => {
        console.log('inicio');
        try {
            if (date !== null) {
                if (date > inicio && date < fin) {

                    setInicioTemp(date)
                    console.log(date);
                    console.log(inicio);
                    setIsDisableFin(true);
                } else {
                    setInicioTemp(inicio);
                }
            }
        } catch {
            setInicioTemp(inicio);
        }

    };
    const handleDateChangeFin = (date: Date | null) => {
        console.log('fin');
        try {
            if (date !== null) {
                if (date > inicio && date < fin) {

                    setFinTemp(date)
                    setIsDisableInicio(true);

                } else {
                    setFinTemp(fin);
                }
            }
        } catch {
            setFinTemp(fin);
        }

    };

    return (
        <div>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className={classes.inLine}>
                    <Grid>
                        <KeyboardTimePicker
                            disabled={isDisableInicio}
                            margin="normal"
                            id="Inicio"
                            label='Inicio'
                            value={inicioTemp}
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
                            value={finTemp}
                            onChange={handleDateChangeFin}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />

                    </Grid>
                    <TextBox text={descripcion} setText={setDescripcion}/>
                    <SelectDetails idTrabajo={lugarDeTrabajo} setIdLugarTrabajo={setLugarDeTrabajo} ></SelectDetails>
                    <ButtonGroupDetail inicio={inicio} fin={fin} descripcion={descripcion} lugarTrabajo={lugarDeTrabajo}
                     setDescripcion={setDescripcion}
                     setIdTrabajo={setLugarDeTrabajo}
                     inicioTemp={inicio}
                     finTemp={fin}
                     setInicio={setInicioTemp}
                     setFin={setFinTemp}></ButtonGroupDetail>
                </div>
            </MuiPickersUtilsProvider>



        </div>

    );
}