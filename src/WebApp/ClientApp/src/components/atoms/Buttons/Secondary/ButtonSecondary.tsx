import { makeStyles } from '@material-ui/core/styles';
import Button         from '@material-ui/core/Button';

interface textButton {
    text: string;
}

const useStyles = makeStyles({
    buttonSecondary: {
        backgroundColor: '#FFFF',
        color: '#4F41A3',
        textTransform: 'none',
    }
})

export const ButtonSecondary = ({ text }: textButton) => {

    const classes = useStyles();

    return (
        <Button 
            className={ classes.buttonSecondary }
            variant="contained" 
        >
            { text } 
        </Button>
    )
}
