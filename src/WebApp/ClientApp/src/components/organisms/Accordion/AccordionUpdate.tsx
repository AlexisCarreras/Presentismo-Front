import {
    makeStyles,
    Theme,
    createStyles
} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { TimerPickerUpdate } from '../../molecules/TimerPicker/TimerPickerUpdate';
import EditIcon from '@material-ui/icons/Edit';
import { TextBox } from '../../atoms/Inputs/TextBox/TextBox';
import { useEffect, useState } from 'react';
import { TextBoxUpdate } from '../../atoms/Inputs/TextBox/TextBoxUpdate';
import { ButtonDetails } from '../../atoms/Buttons/Details/ButtonDetails';
import { Grid } from '@material-ui/core';
import RegistroDeHoras from '../../../services/RegistroDeHoras/registroDeHoras';
import CambioInicio from '../../../services/CambioInicio/CambioInicio';



interface data {



}
const fecha = () => {

    const hoy = new Date();
    const fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2) + 'T'


    return fecha;

};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        minutero:{
            float:'left',
        },
        descripcion:{
            float:'left',
            marginTop:'4%'
        },
        boton:{
            marginTop:'2%',
            marginRight:'2%',
            marginBottom:'2%',
            float:'right',
            backgroundColor: '#007DC4',
            color: '#FFFFFF',
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            fontFamily: '"Montserrat", sans-serif',
            '&:hover': {
                backgroundColor: '#F6921E'
            }
        },
        root: {
            //textAlign:    'center',
            backgroundColor: '#F6921E',
            fontFamily: '"Montserrat", sans-serif',
            width: '95%'
        },
        icon: {
            color: '#FFF',
            fontSize: '20px',
            marginTop: 'auto',
            marginBottom: 'auto',
            marginLeft: '2%',
            fontFamily: '"Montserrat", sans-serif',
        },

        secondaryHeading: {
            fontSize: theme.typography.pxToRem(18),
            backgroundColor: '#F6921E',
            color: "#fff",
            //   color: theme.palette.text.secondary,
            marginLeft: '26%',
            fontFamily: '"Montserrat", sans-serif',
        },


        detailsNull: {
            display: 'flex',
            marginLeft: '2rem',
            fontFamily: '"Montserrat", sans-serif',
            alignItems: 'center',
            width: '50%'
        },
        buttonStyleGuardar: {
           
        },
        description: {
            paddingLeft: '5%',
            marginTop: '4.1%',
            width: '120%'
        },
        buttons: {
            float: 'right',


        },
    }),
);

export const AccordionUpdate = () => {

    const classes = useStyles();
    const [descripcion, setDescripcion] = useState('')
    const [horaInicio, setHoraInicio] = useState('')
    const [inicio, setInicio] = useState<Date>(new Date('2022-02-11T12:00:00.700+00:00'))
    const [fin, setFin] = useState<Date>(new Date('2022-02-11T12:00:00.700+00:00'))
    const [inicioTemp,setInicioTemp] = useState<Date>(new Date('2022-02-11T12:00:00.700+00:00'));
    const [isLoading, setIsLoading] = useState(false);
    const [minutero, setMinutero] = useState<any>()
    const [id,setId] = useState<number>(0);

    useEffect(() => {
        async function PrimerRegistro() {

            try {
                const responseRegistros: any = await RegistroDeHoras();
                if (responseRegistros.status == 200) {
                    console.log('Entre al primer registro')
                    const d = new Date(responseRegistros.data.data[0].begin);
                    setId(responseRegistros.data.data[0].idRegistro);
                    setInicio(d);
                    setFin(d);
                    setHoraInicio(('0' + (d.getHours())).slice(-2) + ':' + ('0' + (d.getMinutes())).slice(-2) + 'Hs');
                    setIsLoading(true)
                }
            } catch (error) {
                setHoraInicio('');
                setIsLoading(false)
            }
        }

        // function fechas() {
        //     console.log('entre al useEffect')

        //     console.log('Inicio: '+ fecha)
        //     if(fecha==null){
        //         setHoraInicio('');
        //     }else{

        //         const d = new Date(fecha);
        //         setHoraInicio( ('0' + (d.getHours())).slice(-2) + ':' + ('0' + (d.getMinutes())).slice(-2) + 'Hs');
        //     }
        // }

        PrimerRegistro();

    }, [localStorage.getItem('Inicio')]);



    async function modificacion(){

        console.log('Descripcion del boto: '+ descripcion);
        console.log('fecha Inicio change: '+ inicioTemp);
      const response: any= await  CambioInicio(id,inicioTemp,descripcion);

    }

    const detalleInicio = () => {


        return (

            <div >


                <Accordion >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.root}
                    >

                        <Typography className={classes.secondaryHeading}>
                            Inicio de actividades a las {horaInicio}
                        </Typography>
                        <EditIcon className={classes.icon}></EditIcon>

                    </AccordionSummary>

                    {isLoading ? (
                        <div>

                            <AccordionDetails className={classes.minutero} >
                                <TimerPickerUpdate
                                    inicio={inicio}
                                    fin={fin}
                                    setInicio={setInicioTemp}
                                ></TimerPickerUpdate>
                            </AccordionDetails>
                        <div className={classes.descripcion}>
                            <TextBoxUpdate  text={descripcion} setText={setDescripcion} />
                            </div>
                            <ButtonDetails
                                estilo={classes.boton}
                                text={'Solicitar Cambio'}
                                disabled={false}
                                onClick={modificacion}
                            ></ButtonDetails>
                        </div>
                    ) : (
                        null
                    )}







                </Accordion>




            </div>

        )
    }



    return (
        <>
            {detalleInicio()}
        </>
    )
}
