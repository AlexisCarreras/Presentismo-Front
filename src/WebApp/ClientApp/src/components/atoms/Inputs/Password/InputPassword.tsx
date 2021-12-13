import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
 
const useStyles = makeStyles({
    
})

export const InputPassword = () => {

    const classes = useStyles();

    return (
        <TextField
            id="input-with-icon-textfield"
            label="Password"
            placeholder="Password"
            type="password"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <LockIcon />
                </InputAdornment>
            ),
        }}
      />
    )
}