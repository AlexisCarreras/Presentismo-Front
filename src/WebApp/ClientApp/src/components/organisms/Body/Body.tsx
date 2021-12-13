import { useState     } from 'react';
import { makeStyles   } from '@material-ui/core';
import { PaperWelcome } from '../../molecules/Paper/PaperWelcome';
import { PaperClock   } from '../../molecules/Paper/PaperClock';
import { ValueContext } from '../../../hooks/UseContext/ValueContext';

const useStyles = makeStyles({
    root: {
        alignItems: 'center',
        backgroundColor: "#FAFAFA",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        // height: '93.1vh',
        position: 'relative',
        width: '80%',
        height: '100%',
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
