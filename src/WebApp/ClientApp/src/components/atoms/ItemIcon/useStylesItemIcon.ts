import { makeStyles } from '@material-ui/core';

export const useStylesItemIcon = () => {

    const useStyles = makeStyles({
        item: {
            backgroundColor: '#007DC4',
            '&:hover': {
                backgroundColor: '#F6921E',
            },
            padding: '1rem',
        },
        icon: {
            color: '#FFFF',
            fontSize: 30,
        },
        text: {
            color: '#FFFF',
            fontSize: '15px',
            marginLeft: '2rem',
        },
    }); 

    return { 
        useStyles,
    }
}