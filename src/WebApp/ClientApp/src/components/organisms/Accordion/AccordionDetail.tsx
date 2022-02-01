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
import { colors } from '@material-ui/core';
import { TextBox } from '../../atoms/Inputs/TextBox/TextBox';
import { SelectDetails } from '../../atoms/Select/SelectDetails';
import { ButtonGroupDetail } from '../../molecules/ButtonsGroup/ButtonGroupDetail';


interface data {
    id: Number;
    inicio: string;
    fin: string;
    lugarTrabajo: string;
    tipoHora: string;
}
const fecha = () => {

    const hoy = new Date();
    const fecha = hoy.getFullYear() + '-' + ('0' + (hoy.getMonth() + 1)).slice(-2) + '-' + ('0' + hoy.getDate()).slice(-2) + 'T'


    return fecha;

};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            //textAlign:    'center',
            fontFamily: '"Montserrat", sans-serif',
        },
        icon: {
            color:        '#F6921E',
            fontSize:     '10px',
            marginTop:    'auto',
            marginBottom: 'auto',
            fontFamily: '"Montserrat", sans-serif',
        },
        heading: {
            fontSize: theme.typography.pxToRem(12),
            flexBasis:     '25%',
            flexShrink:    0,
            fontFamily: '"Montserrat", sans-serif',
        },
        headingComplete: {
            fontSize: theme.typography.pxToRem(12),
            flexBasis:     '25%',
            flexShrink:    0,
            fontFamily: '"Montserrat", sans-serif',
        },
        secondaryHeading: {
            fontSize:     theme.typography.pxToRem(12),
            flexBasis:    '25%',
            display:      'flex',
            color:        theme.palette.text.secondary,
            fontFamily: '"Montserrat", sans-serif',
        },
        containerDetails: {
            fontFamily:'"Montserrat", sans-serif',
            color:      '#F6921E',
        },
        details: {
            color:      '#F6921E',
            marginLeft: '2rem',
            fontFamily:'"Montserrat", sans-serif',
        },
    }),
);

export const AccordionDetail = ({ id,inicio, fin, lugarTrabajo, tipoHora }: data) => {

    const classes = useStyles();

    const inicioFin = () => {

        if (fin === null) {

            return (
                <>
                    <Typography className={classes.heading}>
                        {inicio.substring(16, 11)} -
                    </Typography>
                </>
            )
        }
        else {

            return (
                <Typography className={classes.headingComplete}>
                    {inicio.substring(16, 11)} - {fin.substring(16, 11)}
                </Typography>
            )
        }

    }
    const botton = () => {
        if (fin !== null) {
            return (
                <div>
                    <TimerPicker inicio={new Date(inicio)} fin={new Date(fin)} />
                </div>
            )
        }
    }

    const detalleInicio = () => {

        if (tipoHora === "Productiva") {
            return (
                <Accordion className={classes.root}>
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

                    </AccordionSummary>
                    <AccordionDetails className={classes.containerDetails}>
                  
                        {botton()}
                        
                    </AccordionDetails>
                </Accordion>
            )
        }
    }



    return (
        <>
            {detalleInicio()}
        </>
    )
}
