import 'date-fns';
import { makeStyles               } from '@material-ui/core';
import { useState                 } from 'react';
import   DateFnsUtils               from '@date-io/date-fns';
import { MuiPickersUtilsProvider,
         DatePicker               } from '@material-ui/pickers';
import   esLocale                   from 'date-fns/locale/es'

const useStyles = makeStyles({
  root: {
    marginTop: '3rem',
  },
});

export const Calendar = () => {

    const classes = useStyles();

    const [selectedDate, setSelectedDate] = useState<Date | null>(
      new Date(),
    );
  
    const handleDateChange = (date: Date | null) => {
      setSelectedDate(date);
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale} >
          <div className={ classes.root }>
            <DatePicker
                disableToolbar
                autoOk
                variant="static"
                openTo="date"
                value={selectedDate}
                onChange={handleDateChange}
            />
          </div>
        </MuiPickersUtilsProvider>
    )
}
