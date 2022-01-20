import { makeStyles } from '@material-ui/core';
import Typography     from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        color: '#FFFF',
        justifyContent: 'center',
     
        marginLeft: '15%',
        marginTop: '98%',
        
    },
});

export const VersionApp = () => {

    const classes = useStyles();

    return (
        <Typography 
            className={ classes.text }
            variant="caption" 
            display="block" 
            gutterBottom
        >
            V 0.0.1
        </Typography>
    )
}
