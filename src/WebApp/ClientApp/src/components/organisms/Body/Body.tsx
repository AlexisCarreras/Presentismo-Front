import { useEffect, useState     } from 'react';
import { makeStyles   } from '@material-ui/core';
import { PaperWelcome } from '../../molecules/Paper/PaperWelcome';
import { ValueContext } from '../../../hooks/UseContext/ValueContext';
import Skeleton from '@material-ui/lab/Skeleton';
import { PaperClock } from '../../molecules/Paper/PaperClock';

const useStyles = makeStyles({
    root: {
        alignItems: 'left',
        backgroundColor: "#FAFAFA",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // height: '93.1vh',
        position: 'relative',
        width: '70%',
        height: '82%',
        fontFamily: '"Montserrat", sans-serif',
    },
});

export const Body = () => {

    const classes = useStyles();
    const [valuesRadio, setValuesRadio] = useState( true );
  

    

    return (
        <ValueContext.Provider value={{ 
            valuesRadio, 
            setValuesRadio 
        }}> 
            <div className={ classes.root } >
               <PaperWelcome />
                <PaperClock   />
            </div>
        </ValueContext.Provider>
    )
}
