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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { TimerPicker } from '../../molecules/TimerPicker/TimerPicker';
import WarningIcon from '@material-ui/icons/Warning';
import { Security } from '@material-ui/icons';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';


interface data {
    id: string;
    inicio: string;
    fin: string;
    lugarTrabajo: string;
    tipoHora: string;
    estado: string;
    cliente:string;

}
const fecha = () => {

    const hoy = new Date();
    const fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2) + 'T'


    return fecha;

};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconW: {
            marginLeft: '45%',
            marginTop: 'auto',
            color:'#F6921E'
        },
        iconE: {
            marginLeft: '45%',
            marginTop: 'auto',
            color:'#ff0000'
        },
        iconA: {
            marginLeft: '45%',
            marginTop: 'auto',
            color:'#54cf00'
        },
        textIcon:{
            marginLeft: '35%',
            marginTop: 'auto',
            
            height:'100%',
            fontSize: theme.typography.pxToRem(10),
            color: theme.palette.text.secondary,
            fontFamily: '"Montserrat", sans-serif',

        },
        detailsFull: {
            marginTop: '5%'
        },
        root: {
            //textAlign:    'center',

            fontFamily: '"Montserrat", sans-serif',
            width: '95%'
        },
        icon: {
            color: '#F6921E',
            fontSize: '10px',
            marginTop: 'auto',
            marginBottom: 'auto',
            fontFamily: '"Montserrat", sans-serif',
            padding: '2px'
        },
        heading: {
            fontSize: theme.typography.pxToRem(12),
            flexBasis: '25%',
            flexShrink: 0,
            fontFamily: '"Montserrat", sans-serif',

        },
        headingComplete: {
            fontSize: theme.typography.pxToRem(12),
            flexBasis: '25%',
            flexShrink: 0,
            fontFamily: '"Montserrat", sans-serif',
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(12),
            flexBasis: '25%',
            display: 'flex',
            color: theme.palette.text.secondary,
            fontFamily: '"Montserrat", sans-serif',

        },
        containerDetails: {
            fontFamily: '"Montserrat", sans-serif',
            color: '#F6921E',
        },
        details: {
            color: '#F6921E',
            marginLeft: '2rem',
            fontFamily: '"Montserrat", sans-serif',
        },
        detailsNull: {
            color: '#F6921E',
            marginLeft: '2rem',
            fontFamily: '"Montserrat", sans-serif',
            alignItems: 'center',
            width: '100%'
        },
    }),
);

export const AccordionDetail = ({ id, inicio, fin, lugarTrabajo, tipoHora, estado, cliente }: data) => {
    const fechas = (fecha: any) => {

        const d = new Date(fecha);



        return ('0' + (d.getHours())).slice(-2) + ':' + ('0' + (d.getMinutes())).slice(-2)
    }
    const classes = useStyles();

    const inicioFin = () => {

        if (fin === null) {

            return (
                <>
                    <Typography className={classes.heading}>
                        {fechas(inicio)} -
                    </Typography>
                </>
            )
        }
        else {

            return (
                <Typography className={classes.headingComplete}>
                    {fechas(inicio) + " - " + fechas(fin)}
                </Typography>
            )
        }

    }
    const botton = () => {

        if (fin !== null) {
            return (
                <div>
                    <TimerPicker inicio={new Date(inicio)} fin={new Date(fin)} lugar={lugarTrabajo} idRegistro={id} />
                </div>
            )
        } else {
            return (

                <Typography className={classes.detailsNull}>
                    Registro de Hora Abierto
                </Typography>
            )
        }
    }

    const clienteText=()=>{

        if(cliente=="1"){
            return(
                <Typography className={classes.detailsNull}>
                YPF
            </Typography>
            )
        }else if(cliente=='2'){
            <Typography className={classes.detailsNull}>
            CDA
        </Typography>
        }else if(cliente=="3"){
            <Typography className={classes.detailsNull}>
            Banco Galicia
        </Typography>
        }else if(cliente=="4"){
            <Typography className={classes.detailsNull}>
          Telecom
        </Typography>
        }

    }

    const pendiente = () => {
        if (estado == 'Pendiente') {
            return (<>
                {/* <Typography className={classes.textIcon}>
                    Solicitud de cambio de inicio pendiente
                </Typography> */}
                <WarningIcon className={classes.iconW} ></WarningIcon>
            </>
            );
        }else if(estado=='Aceptado'){
            return (<>
              
                <CheckCircleIcon className={classes.iconA} ></CheckCircleIcon>
            </>
            );     
        }else if(estado=='Rechazado'){
            return (<>
              
                <ErrorIcon className={classes.iconE} ></ErrorIcon>
            </>
            );     
        }
    }

    const detalleInicio = () => {

        if (tipoHora === "Productiva") {
            return (
                // <Grid container className={classes.root}>
                <div >
                    <Accordion >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className={classes.root}
                        >
                            <FiberManualRecordIcon className={classes.icon} />

                            {inicioFin()}

                            <Typography className={classes.secondaryHeading}>
                                {lugarTrabajo} / YPF
                            </Typography>
                            {pendiente()}
                        </AccordionSummary>

                        <AccordionDetails className={classes.detailsNull}>

                            {botton()}

                        </AccordionDetails>
                    </Accordion>
                </div>
                // </Grid>
            )
        }
    }

    return (
        <>
            {detalleInicio()}
        </>
    )
}
function elseif(arg0: boolean) {
    throw new Error('Function not implemented.');
}

