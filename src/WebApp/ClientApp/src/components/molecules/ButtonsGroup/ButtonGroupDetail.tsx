

import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ButtonDetails } from '../../atoms/Buttons/Details/ButtonDetails';
import { BorderRightOutlined } from '@material-ui/icons';
import { border } from '@mui/system';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
        marginLeft: theme.spacing(35)
      },

    },

    buttonStyleRestablecer: {
      backgroundColor: '#007DC4',
      color: '#FFFFFF',
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      fontFamily: '"Montserrat", sans-serif',
      '&:hover': {
        backgroundColor: '#F6921E'
      }
    },

    buttonStyleGuardar: {
      backgroundColor: '#007DC4',
      color: '#FFFFFF',
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      fontFamily: '"Montserrat", sans-serif',
      '&:hover': {
        backgroundColor: '#F6921E'
      }
    }

  }),
);

interface prop{
  inicio:Date,
  fin:Date,
  descripcion:String,
  lugarTrabajo:String,
  setDescripcion:(value:string)=>void,
  setIdTrabajo:(value:string)=>void,
  inicioTemp:Date,
  finTemp:Date,
  setInicio:(value:Date)=>void,
  setFin:(value:Date)=>void,
  setIsDisableInicio:(value:boolean)=>void;
  setIsDisableFin:(value:boolean)=>void;
}

export const ButtonGroupDetail = ({inicio,
  fin,
  descripcion,
  lugarTrabajo,
  setDescripcion,
  setIdTrabajo,
  inicioTemp,
  finTemp,
  setInicio,
  setFin,
  setIsDisableInicio,
  setIsDisableFin}:prop) => {
  const classes = useStyles();

  const onClic = () => {
    console.log('Inicio: '+inicio);
    console.log('Fin: '+fin);
    console.log('Descripcion: '+descripcion);
    console.log('IdLugaarDeTrabajo: '+lugarTrabajo);
  }

  const onClicRestablecer = () => {
    setDescripcion('');
    setIdTrabajo('');
    setInicio(inicioTemp);
    setFin(finTemp)
    setIsDisableFin(false)
    setIsDisableInicio(false)  
  }

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

        <ButtonDetails estilo={classes.buttonStyleRestablecer} text={'Restablecer'} disabled={false} onClick={() => { onClicRestablecer()}} />
        <ButtonDetails estilo={classes.buttonStyleGuardar} text={'Guardar'} disabled={false} onClick={() => {onClic()}} />

      </ButtonGroup>

    </div>
  );
}