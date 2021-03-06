import { makeStyles } from '@material-ui/core/styles';
import Button         from '@material-ui/core/Button';

interface textButton {
    text     : string;
    disabled : boolean;
    onClick : (  ) => void;
}

const useStyles = makeStyles({
    buttonPrimary: {
        color: '#FFFF',
        fontSize: '16px',
        marginTop: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        textTransform: 'none',
        width: '70%',
    }
}); 
 
export const ButtonPrimary = ({ text, disabled, onClick }: textButton) => {

    const classes = useStyles();
 
    return (
        <Button  
            onClick=    { () => onClick() }
            className=  { classes.buttonPrimary }
            disabled=   { disabled              }
            variant=    "contained" 
            color=      "primary"
        >
            { text }
        </Button>
    )
}
