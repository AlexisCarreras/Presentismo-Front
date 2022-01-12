import { makeStyles } from '@material-ui/core';

export const useStylesItemIcon = () => {

    const useStyles = makeStyles({
        item: {
            backgroundColor: '#4F41A3',
            '&:hover': {
                backgroundColor: '#898DFF',
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