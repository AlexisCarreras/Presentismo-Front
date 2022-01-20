import { createStyles, 
         makeStyles, 
         Theme       } from '@material-ui/core';
import   AppBar        from '@material-ui/core/AppBar';
import   Toolbar       from '@material-ui/core/Toolbar';
import { ItemsHeader } from '../../molecules/ItemsHeader/ItemsHeader';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
       
    }, 
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
 
export const AppBarHeader = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar 
              position="static"
              color="inherit"  
            >
                <Toolbar>
                  <ItemsHeader />
                </Toolbar>
            </AppBar>
      </div>
    )
}
