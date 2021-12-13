import { makeStyles } from '@material-ui/core/styles';
import Button         from '@material-ui/core/Button';

interface textButton {
    text : string;
}

const useStyles = makeStyles({
    buttonDisable: {
        fontSize: '16px',
        marginTop: '1rem',
        paddingTop: '0.6rem',
        paddingBottom: '0.6rem',
        textTransform: 'none',
        width: '70%',
    }
});

export const ButtonDisable = ({ text }: textButton) => {

    const classes = useStyles();

    return (
        <Button 
            className={ classes.buttonDisable }
            variant="contained" 
            disabled
        >
            { text }
        </Button>
    )
} 
