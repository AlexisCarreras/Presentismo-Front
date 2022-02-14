

import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ButtonDetails } from '../../atoms/Buttons/Details/ButtonDetails';
import { BorderRightOutlined } from '@material-ui/icons';
import { border } from '@mui/system';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

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
      display:'flex',
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
      display:'flex',
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
  restablecer:() => void;
  guardar:() => void;
}

export const ButtonGroupDetail = ({restablecer,guardar}:prop) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

        <ButtonDetails estilo={classes.buttonStyleRestablecer} text={'Restablecer'} disabled={false} onClick={() => { restablecer()}} />
        <ButtonDetails estilo={classes.buttonStyleGuardar} text={'Guardar'} disabled={false} onClick={() => guardar()} />

      </ButtonGroup>
    

    </div>
  );
}