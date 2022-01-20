
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { ButtonDetails } from '../../Buttons/Details/ButtonDetails';

const useStyles = makeStyles({
    buttonPrimary: {
        color: '#FFFF',
        fontSize: '16px',
        marginLeft: '90%',
        textTransform: 'none',
        height: '40%'
    }
})

export const TextBox = () => {

    const classes = useStyles();

    return (

        <TextField
            id="input-with-icon-textfield"
            label="Descripcion"
            placeholder="Descripción de la tarea"
            required
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">

                    </InputAdornment>
                ),
            }} />
    )
}