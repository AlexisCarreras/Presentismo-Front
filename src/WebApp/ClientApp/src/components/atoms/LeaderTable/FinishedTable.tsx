import React, { useEffect, useState } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RegistroDeHoras from '../../../services/RegistroDeHoras/registroDeHoras';
import { Skeleton } from '@material-ui/lab';
import { ButtonDetails } from '../Buttons/Details/ButtonDetails';
import Pendiente from '../../../services/Pendiente/pendiente';
import AceptadoRechasado from '../../../services/Pendiente/rechazado';

const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: '#007DC4',
            fontFamily: '"Montserrat", sans-serif',
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);


const useStyles = makeStyles({
    table: {
        minWidth: 700,

    },
    button: {
        color: '#fff',
        backgroundColor: '#007DC4',
        '&:hover': {
            backgroundColor: '#F6921E'
        }

    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    const [registroHora, setRegistroHora] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {


        async function loadDetails() {
            const response: any = await AceptadoRechasado()
            try {

                if (response.status === 200) {
                    setRegistroHora(response.data);
                    setLoading(false);
                }
                else {
                    setRegistroHora({});
                }

                console.log(response);
            } catch (error) {

            }

        }
        loadDetails();


    }, [registroHora]);

    const fechas = (fecha: any) => {

        const d = new Date(fecha);



        return ('0' + (d.getHours())).slice(-2) + ':' + ('0' + (d.getMinutes())).slice(-2);
    }

    const anioMesDia = (fecha: any) => {
        const d = new Date(fecha);

        return (d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2))
    }

    const filas=()=> {

        return(
            
            registroHora.data.map((row: any) => (
                <StyledTableRow key={row.registroId} >
                    <StyledTableCell align="center">{row.user}</StyledTableCell>
                    <StyledTableCell align='center'>
                        {anioMesDia(row.begin)}
                    </StyledTableCell>
                    <StyledTableCell align="center">{fechas(row.begin) + ' Hrs'}</StyledTableCell>
                    <StyledTableCell align="center">{fechas(row.beginChange)}</StyledTableCell>
                    <StyledTableCell align="center">{row.justification}</StyledTableCell>
                  
                </StyledTableRow>

            )
           
        
        ));
        
    }
    return (
        <>
            {loading ? (
                <div>

                    <Skeleton variant="text" />
                    <Skeleton variant="rect" />
                    <Skeleton variant="rect" />
                </div>
            ) : (
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align='center'>Usuario</StyledTableCell>
                                <StyledTableCell align="center">Fecha</StyledTableCell>
                                <StyledTableCell align="center">Hora de inicio</StyledTableCell>
                                <StyledTableCell align="center">Hora de inicio a aporvar</StyledTableCell>
                                <StyledTableCell align="center">Justificación</StyledTableCell>
                       
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filas()}
                        </TableBody>
                    </Table>
                </TableContainer>)}
        </>
    );

}