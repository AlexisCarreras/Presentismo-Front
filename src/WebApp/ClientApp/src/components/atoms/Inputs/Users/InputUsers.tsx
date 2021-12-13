import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
     
})

export const InputUsers = () => {

    const classes = useStyles();

    return (
        <TextField
            id="input-with-icon-textfield"
            label="Usuario"
            placeholder="Usuario"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <AccountCircle />
                </InputAdornment>
            ),
        }}
      />
    )
}
