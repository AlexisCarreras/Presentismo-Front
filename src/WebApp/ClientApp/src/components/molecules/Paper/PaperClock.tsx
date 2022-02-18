import { useContext, useState, useEffect } from 'react';
import { Card, CardHeader, makeStyles, Paper, Snackbar, Typography } from '@material-ui/core';
import { RadioButtonsGroup } from '../RadioButtonsGroup/RadioButtonsGroup';
import Skeleton from '@material-ui/lab/Skeleton';
import { ButtonPrimary } from '../../atoms/Buttons/Primary/ButtonPrimary';
import { ValueContext } from '../../../hooks/UseContext/ValueContext';
import HorasTrabajadas from '../../../services/HorasTrabajadas/horasTrabajadas';
import IniciarDia from '../../../services/IniciarDia/iniciarDia';
import FinalizarDia from '../../../services/FinalizarDia/finalizarDia';
import PausarDia from '../../../services/PausarDia/pausarDia';
import Reiniciar from '../../../services/Reiniciar/reiniciar';
import EstadoActual from '../../../services/EstadoActual/estadoActual';
import { RadContext } from '../../../hooks/UseContext/RadContext';
import { Watch } from '../../atoms/Watch/Watch';
import { Alert } from '@material-ui/lab';
import theme from '../../../theme/themeConfig';


const useStyles = makeStyles({
    skeleton: {

        backgroundColor: '#fff',

        marginBottom: '15%',
        marginTop: '7%',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: '5%',
        marginRight: '5%',
        fontFamily: '"Montserrat", sans-serif',

    },
    card: {
        width: '90%',
        marginTop: '13.3%',
        marginLeft: '5%',
        // marginRight: '3rem',
        // marginLeft: '1rem',
    },
    cardHeader: {
        backgroundColor: '#007DC4',
        color: '#FFFF',
        fontSize: '100%',
        textAlign: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    subTitulo: {
        height: '51px',
        backgroundColor: '#F6921E',
        display: 'flex',


    },
    paperFunction: {
        backgroundColor: '#FFFF',

        // marginBottom: '15%',
        marginTop: '5%',
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginLeft: '5%',
        // marginRight: '5%',
        fontFamily: '"Montserrat", sans-serif',

    },
    buttons: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '2.5rem',
        alignItems: 'center',
        fontFamily: '"Montserrat", sans-serif',
    },
    containerText: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2.25rem',
        fontFamily: '"Montserrat", sans-serif',
        color: '#007DC4',
        textShadow: '1px 1px 3px #BEBEBE',
    },

    textHours: {
        position: 'relative',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        // marginRight: '6.5rem',
        top: '60%',
        left: '22%',
        fontSize: '95%',
    },
    textMinutes: {
        position: 'relative',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        // marginRight: '6.5rem',
        top: '60%',
        left: '54%',
        fontSize: '95%',
    },
    textSeconds: {
        position: 'relative',
        margin: 0,
        textShadow: '1px 1px 3px #BEBEBE',
        left: '77%',
        display: 'flex',
        alignItems: 'center',
        fontSize: '80%',
    },
    suTituloText: {
        fontSize: theme.typography.pxToRem(18),
        backgroundColor: '#F6921E',
        color: "#fff",
        //marginLeft: '26%',
        fontFamily: '"Montserrat", sans-serif',
        alignItems: 'center',
        display: 'flex',
        margin: 'auto'

    }

});

export const PaperClock = () => {

    // Texto de los botones

    const INICIO = "Iniciar actividades";

    const FINALIZAR = "Finalizar actividades";

    const PAUSAR = "Pausar actividades";

    const REANUDAR = "Reanudar actividades";

    // Estados del dia

    const INICIADO = "INICIADO";

    const SIN_INICIAR = "SIN_INICIAR";

    const PAUSADO = "PAUSADO";

    const FINALIZADO = "FINALIZADO";

    const classes = useStyles();

    const [visible, setVisible] = useState(false);

    const [text, setText] = useState(INICIO);

    const [valueFinish, setValueFinish] = useState(false);

    const [valuePrimaryButton, setValuePrimaryButton] = useState(false);


    const { valuesRadio } = useContext(ValueContext);
    const [valueLugar, setValueLugar] = useState<string>('');
    const [cambie, setCambie] = useState(false);
    //Prueba de estado de radioButtons
    const { valuesRadioContext } = useContext(RadContext);
    const [disableRadio, setDisableRadio] = useState(valuesRadioContext);
    // const [disable, setDisableRadio] = useState(false);
    // API DE ESTADO ACTUAL
    const [estadoActual, setEstadoActual] = useState<any>(null);
    const [isLoading, setLoading] = useState(true);
    // const [primerRegistro, setPrimerRegistro] = useState<any>('')
    //Estructura de Watch
    const [time, setTime] = useState<any>({ ms: 0, s: 0, m: 0, h: 0 });
    const [interv, setInterv] = useState<any>();
    const [horasTrabajadas, setHorasTrabajadas] = useState<any>(null);
   
    const [openError, setOpenError] = useState(false);
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [hora, setHora] = useState<Date>(new Date());

    useEffect(() => {
        async function estado() {
            const response: any = await EstadoActual();
            const responseHorasTrabajadas: any = await HorasTrabajadas();

            if (response.status === 200 && responseHorasTrabajadas.status === 200) {
                setEstadoActual(response.data.data);
                setHorasTrabajadas(responseHorasTrabajadas.data.data);
                setTime({ ms: 0, s: 0, m: responseHorasTrabajadas.data.data.minutes, h: responseHorasTrabajadas.data.data.hours });
                setLoading(false);
                setCambie(!cambie);

            }
            else {
                setEstadoActual(null);

            }

        }
        estado();
    }, []);



    document.addEventListener("visibilitychange", function () {

        if (visible === true) {
            window.location.replace('');
            setVisible(false);

        } else {
            setVisible(true);
        }


    })

    //prueba

    useEffect(() => {
        function changeText() {
            if (isLoading === false) {
                if (estadoActual.estado === SIN_INICIAR) {
                    console.log("Día sin iniciar");

                }
                if (estadoActual.estado === INICIADO) {
                    setText(PAUSAR);
                    setValueLugar(estadoActual.lugarTrabajo)
                    setDisableRadio(valuesRadio);
                    setValuePrimaryButton(!valuePrimaryButton);
                    setValueFinish(!valueFinish);
                    updatedMs = time.ms
                    updatedS = time.s;
                    updatedM = time.m;
                    updatedH = time.h;
                    start();

                }
                else if (estadoActual.estado === PAUSADO) {

                    setText(REANUDAR);

                    // setValueLugar(estadoActual.lugarTrabajo)
                    setValueFinish(false);
                    setValuePrimaryButton(!valuesRadio);
                    // setDisableRadio(false);
                }
                else if (estadoActual.estado === FINALIZADO) {
                    setText(INICIO);

                    //   setValueLugar(estadoActual.lugarTrabajo)
                    setValuePrimaryButton(false);
                    setValueFinish(false);
                    setDisableRadio(false);
                }
            }
        }

        changeText();

    }, [cambie]);

    // useEffect(() => {
    //     function cerrarDia() {
    //         setHora(new Date())
    //      if(hora.getHours().toString()=='18'){
    //         handleClickFinish();
            
    //      }
    //     }
    //     cerrarDia();
    // }, [hora]);


    const start = () => {
        setInterv(setInterval(run, 10));
        run();
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    //   debugger
    const run = () => {
        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    };

    const stop = () => {
        clearInterval(interv);
    };

    //   const reset = () => {
    //     clearInterval(interv);
    //     setTime({ms:0, s:0, m:0, h:0})
    //   };
    const resume = () => start();

    //Estructura de paperClock
    async function handleClickStart() {
        try {
            if (text === INICIO) {
                const response: any = await IniciarDia(valueLugar);
                console.log(response);
                if (response.data.info.code == '200') {
                    start();
                    setText(PAUSAR);
                    setDisableRadio(!disableRadio);
                    setValueFinish(!valueFinish);
                    setMensaje('Inicio de actividades exitoso')
                    setOpen(true);
                    if (localStorage.getItem('Inicio') == 'False') {
                        localStorage.setItem('Inicio', 'True');
                    } else if (localStorage.getItem('Inicio') == 'False') {
                        localStorage.setItem('Inicio', 'True');
                    } else { localStorage.setItem('Inicio', 'True'); }

                    // PrimerRegistro();
                } else if (response.data.info.code == '409') {
                    setMensaje('ERROR debe cerrar sus días anteriores para poder iniciar ');
                    setOpenError(true);
                }
            }
            else if (text === PAUSAR) {
                const response: any = await PausarDia('');
                if (response.data.info.code == '200') {
                    stop();
                    setText(REANUDAR);
                    setDisableRadio(!disableRadio);
                    setValuePrimaryButton(!valuePrimaryButton);
                    setValueFinish(!valueFinish);
                    setMensaje('Se Pauso la Actividad');
                    setOpen(true);
                } else {
                    setMensaje('Error al pausar');
                    setOpenError(true);
                }
            }
            else if (text === REANUDAR) {
                const response: any = await Reiniciar(valueLugar);
                if (response.data.info.code == '200') {
                    resume();
                    setText(PAUSAR);
                    setValueFinish(!valueFinish)
                    setDisableRadio(!disableRadio);
                    setMensaje('Se reanudó la actividad');
                    setOpen(true);
                } else {
                    setMensaje('Error al reanudar la actividad');
                    setOpenError(true);
                }
            }
        } catch (error) {
            setMensaje('ERROR debe cerrar sus días anteriores para poder iniciar ');
            setOpenError(true);
        }
    };
    const handleClose = () => {
        setOpen(false);
        setOpenError(false);
    };

    async function handleClickFinish() {
        const response: any = await FinalizarDia();
        if (response.data.info.code == '200') {
            setText(INICIO);
            stop();
            setValueFinish(!valueFinish);
            setValuePrimaryButton(valuePrimaryButton);
            setDisableRadio(!disableRadio);
            setMensaje('Se finalizó la actividad');
            setOpen(true);
        } else {
            setMensaje('Error al finalizar la actividad');
            setOpenError(true);
        }
    };


    const buttonsBeginEnd = () => {

        if (isLoading === false) {

            if (estadoActual.estado === SIN_INICIAR) {
                return (
                    <div className={classes.buttons}>
                        <ButtonPrimary
                            text={text}
                            disabled={!valuePrimaryButton}
                            onClick={() => handleClickStart()}
                        />
                        <ButtonPrimary
                            text={FINALIZAR}
                            disabled={!valueFinish}
                            onClick={() => handleClickFinish()}
                        />
                    </div>
                )
            }

            if (estadoActual.estado === INICIADO) {
                return (
                    <div className={classes.buttons}>
                        <ButtonPrimary
                            text={text}
                            disabled={!valuePrimaryButton}
                            onClick={() => handleClickStart()}
                        />
                        <ButtonPrimary
                            text={FINALIZAR}
                            disabled={!valueFinish}
                            onClick={() => handleClickFinish()}
                        />
                    </div>
                )
            }

            if (estadoActual.estado === PAUSADO) {

                return (
                    <div className={classes.buttons}>
                        <ButtonPrimary
                            text={text}
                            disabled={!valuePrimaryButton}
                            onClick={() => handleClickStart()}
                        />
                        <ButtonPrimary
                            text={FINALIZAR}
                            disabled={!valueFinish}
                            onClick={() => handleClickFinish()}

                        />
                    </div>
                )
            }

            if (estadoActual.estado === FINALIZADO) {
                return (
                    <div className={classes.buttons}>
                        <ButtonPrimary
                            text={text}
                            disabled={valuePrimaryButton}
                            onClick={() => handleClickStart()}
                        />
                        <ButtonPrimary
                            text={FINALIZAR}
                            disabled={valueFinish}
                            onClick={() => handleClickFinish()}

                        />
                    </div>
                )
            }
        }
    }
    const fecha = () => {

        const hoy = new Date();


        return hoy.toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' });

    };


    return (

        <div >

            {isLoading ? (

                // <Skeleton className={classes.skeleton} animation="wave" variant='rect'/>
                <div className={classes.skeleton}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="rect" width={620} height={500} />
                </div>
            ) : (
                <Card className={classes.card}>
                    <CardHeader
                        className={classes.cardHeader}
                        disableTypography
                        title={fecha()}
                    />
                    {/* <ButtonProvider> */}
                    {/* <Paper
                        className={classes.paperFunction}
                        elevation={3}
                    > */}
                    <div className={classes.subTitulo}>
                        <Typography className={classes.suTituloText} gutterBottom>
                            Horas trasncurridas desde el inicio de actividades
                        </Typography>

                    </div>
                    <Watch time={time} setTime={setTime} loadign={isLoading} />

                    <RadioButtonsGroup value={valueLugar}
                        setValue={setValueLugar}
                        disableRadio={!disableRadio}
                        cambie={cambie}
                        setCambie={setCambie}
                        SetPrimary={setValuePrimaryButton}
                        valuePrimaryButton={valuePrimaryButton}
                        title={'Lugar de trabajo'} />

                    {/* <SelectClients></SelectClients> */}

                    {/* <RadioButtonsGroup value={valueCliente} 
                        setValue={setValueCliente} 
                        disableRadio={!disableRadio} 
                        cambie={cambie}
                        setCambie={setCambie} 
                        SetPrimary={setValuePrimaryButton}
                        valuePrimaryButton={valuePrimaryButton}
                        title={'Cliente/Proyecto'}/> */}
                    {buttonsBeginEnd()}
                    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success">
                            {mensaje}
                        </Alert>
                    </Snackbar>
                    <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error">
                            {mensaje}
                        </Alert>
                    </Snackbar>

                    {/* </Paper> */}
                    {/* </ButtonProvider> */}
                </Card>
            )}

        </div>
    )
}
