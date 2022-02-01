import { makeStyles       } from '@material-ui/core/styles';
import   Avatar             from '@material-ui/core/Avatar';
import   Button             from '@material-ui/core/Button';
import   Menu               from '@material-ui/core/Menu';
import   MenuItem           from '@material-ui/core/MenuItem';
import   Fade               from '@material-ui/core/Fade';
import { useOpenCloseMenu } from '../../../hooks/OpenCloseMenu/useOpenCloseMenu';

interface textAvatar {
    text : string;
}

const useStyles = makeStyles({
    avatar: {
        backgroundColor: '#FFFF',
        border:          '2.5px solid #007DC4',
        color:           '#F6921E',
    },
    menu: {
        marginTop: '2.5rem',
    }
}); 

export const AvatarProfile = ({ text }: textAvatar) => {

    const classes = useStyles();

    const { open, anchorEl, handleClick, handleClose } = useOpenCloseMenu();

    return (
        <>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar
                    className= { classes.avatar } 
                >
                    { text }
                </Avatar>
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={ anchorEl }
                keepMounted
                open={ open }
                onClose={ handleClose }
                TransitionComponent={ Fade }
                className= { classes.menu }
            >
                <MenuItem onClick={ handleClose }>Cerrar Sesión</MenuItem>
            </Menu>
        </>
    )
}
