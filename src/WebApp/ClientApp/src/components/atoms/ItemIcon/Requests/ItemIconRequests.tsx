import { useStylesItemIcon }  from '../useStylesItemIcon'; 

import ListItem               from '@material-ui/core/ListItem';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ReactDOM from 'react-dom';
import { LeaderScreen } from '../../../organisms/LeaderScreen/LeaderScreen';
import { HomeLeader } from '../../../templates/Home/HomeLeader';


export const ItemIconRequests = () => {

    const { useStyles } = useStylesItemIcon(); 
    const classes = useStyles();
    return (
        <ListItem 
            button
            className   = { classes.item    }
        
        > 
            <AssignmentOutlinedIcon 
                className={ classes.icon }
                onClick={()=>{
                    ReactDOM.render(
                       
                        <HomeLeader></HomeLeader>,
                
                     document.getElementById('root'))
                }}
            />
        </ListItem> 
    )
} 
 