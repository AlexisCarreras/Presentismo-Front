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
import { makeStyles, Snackbar } from '@material-ui/core';
import { SelectDetails } from '../../atoms/Select/SelectDetails';
import LugarTrabajo from '../../../services/LugarTrabajo/lugarTrabajo';
import ActualizarRegistro from '../../../services/ActualizarRegistro/ActualizarRegistro';
import { updateLanguageServiceSourceFile } from 'typescript';
import { Alert } from '@material-ui/lab';




interface data {
    inicio: Date;
    fin: Date;
    lugar: String;
    idRegistro: String;

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
    },
    combo: {
        float: 'left'
    },
    buttons: {
        float: 'right',

    },

    description: {

        paddingLeft: '1.2%',
    },
    root: {
        height: '100%',
        width: '100%'
    }

})


export const TimerPicker = ({ inicio, fin, lugar, idRegistro }: data) => {

    const classes = useStyles();
    const [lugarTemp, setLugarTemp] = useState(0);
    const [inicioTemp, setInicioTemp] = useState(inicio);
    const [finTemp, setFinTemp] = useState(fin);
    const [lugarDeTrabajo, setLugarDeTrabajo] = useState(0);
    const [cliente, setCliente] = useState(2);
    const [descripcion, setDescripcion] = useState("");
    const [isDisableInicio, setIsDisableInicio] = useState(true);
    const [isDisableFin, setIsDisableFin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [lugarTrabajo, setLugarTrabajo] = useState<any>(null);
    const [clienteText, setClienteText] = useState('')
    const [idCliente, setIdCliente] = useState(2);
    const [proyecto, setProyecto] = useState('');
    const [idProyecyo, setIdProyecto] = useState(0);
    const [lugarTrabajoText, setLugarTrabajoText] = useState('');
    const [open,setOpen]=useState(false);
    const [openError,setOpenError]=useState(false);

    useEffect(() => {
        async function lugarTrabajo() {
            const response: any = await LugarTrabajo()

            if (response.status === 200) {
                console.log(response.data);
                setLugarTrabajo(response.data.data);
                setIsLoading(false);
                response.data.data.map((item: any) => {
                    if (item.nombre == lugar) {
                        setLugarDeTrabajo(item.id);
                        setLugarTemp(item.id);
                    }
                });
            }
        }
        lugarTrabajo();
    }, []);

    const handleDateChangeInicio = (date: Date | null) => {
        console.log('inicio');
        console.log(date);
        console.log(inicio);
        console.log(fin);
        try {
            if (date !== null) {
                if (date > inicio && date<fin) {
                    console.log('inicio');
                    setInicioTemp(date)
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
    const handleClose = () => {
      
    
        setOpen(false);
        setOpenError(false);
        //window.location.replace('');
      };
    async function Update() {

        const response: any = await ActualizarRegistro(inicioTemp, finTemp, lugarDeTrabajo, descripcion, idCliente, 'Testing', 1, idCliente, clienteText, idRegistro)
        console.log('respuesta: ' + response);
        if (response.data.info.code=='200'){
            
            setOpen(true);
        }else{
            setOpenError(true)
        }
    }
    function resteblecer(){
        setDescripcion('');
        setInicioTemp(inicio);
        setFinTemp(fin);
        setIsDisableFin(false);
        setIsDisableInicio(false);
        setLugarDeTrabajo(lugarTemp);
        setIdCliente(cliente);
    }
    const botones = () => {


        if (!isLoading) {
            return (
                <Grid container className={classes.root}>
                    <div >

                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container className={classes.inLine}>
                                <div className={classes.inLine}>

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


                                    <div className={classes.description}>
                                        <TextBox text={descripcion} setText={setDescripcion} />
                                    </div>
                                    <div>
                                        <div className={classes.combo}>
                                            <SelectDetails id={lugarDeTrabajo} setId={setLugarDeTrabajo}
                                                setText={setLugarTrabajoText}
                                                text={''}
                                                subText={'Lugar de trabajo'}
                                                data={lugarTrabajo}></SelectDetails>
                                        </div>
                                        <div className={classes.combo}>
                                            <SelectDetails
                                                id={idCliente}
                                                setId={setIdCliente}
                                                setText={setClienteText}
                                                text={''}
                                                subText={'Cliente/Proyecto'}
                                                data={[{ id: "1", nombre: 'YPF' }, { id: "2", nombre: 'CDA' }, { id: "3", nombre: 'Banco Galicia' }, { id: "4", nombre: 'Telecom' }]}></SelectDetails>
                                        </div>
                                    </div>
                                    <div>
                                        <div className={classes.buttons}>
                                            <ButtonGroupDetail restablecer={resteblecer}  guardar={Update}></ButtonGroupDetail>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </MuiPickersUtilsProvider>

                    </div>
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            Registro/s actualizados
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                           Error al actualizar
                        </Alert>
                    </Snackbar>
                </Grid>);

        }
    }

    return (

        <>{botones()}</>
    );
}