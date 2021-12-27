import { makeStyles, 
         Theme, 
         createStyles }        from '@material-ui/core/styles';
import   Accordion             from '@material-ui/core/Accordion';
import   AccordionSummary      from '@material-ui/core/AccordionSummary';
import   AccordionDetails      from '@material-ui/core/AccordionDetails';
import   ExpandMoreIcon        from '@material-ui/icons/ExpandMore';
import   Typography            from '@material-ui/core/Typography';
import   FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface data {
    inicio       : string;
    lugarTrabajo : string;
    tipoHora     : string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
        textAlign: 'center'
      },
      icon: {
        color: '#9FA2FE',
        fontSize: '10px',
        marginTop: 'auto',
        marginBottom: 'auto'
      },
      heading: {
          fontSize: theme.typography.pxToRem(15),
          flexBasis: '33.33%',
          flexShrink: 0,
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        containerDetails: {
            backgroundColor: '#F8F8F8',
        },
        details: {
            color: '#7A7979',
            marginLeft: '2rem',
        },
  }),
);

export const AccordionDetail = ({ inicio, lugarTrabajo, tipoHora }: data) => {

    const classes = useStyles();

    const detalleInicio = () => {

        if ( tipoHora === "Productiva" ) {
            return(
                <Accordion>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={ classes.root }
                    >
                        <FiberManualRecordIcon className={ classes.icon } />
            
                        <Typography className={classes.heading}>
                            { inicio.substring(16,11) }
                        </Typography>
                        <Typography className={classes.secondaryHeading}> 
                            { lugarTrabajo }
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={ classes.containerDetails }>
                        <Typography
                            variant='body2'
                            align='center' 
                            className={ classes.details }
                        >  
                            Cliente/Tarea
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        }
    }

    // console.log(tipoHora);
 
    return (
        <>
            { detalleInicio() }
        </>
    )
}
