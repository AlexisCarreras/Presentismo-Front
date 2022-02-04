import {
  Theme,
  withStyles,
  createStyles
} from '@material-ui/core/styles';
import {
  IconButton,
  makeStyles
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import { useOpenCloseMenu } from '../../../../hooks/OpenCloseMenu/useOpenCloseMenu';

const useStyles = makeStyles({
  icon: {
    color: '#007DC4',
    fontSize: 30,

  },
  menu: {
    marginTop: '2.5rem',
    
  }
});

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 3,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '1px',
      color: '#FFFF',
      backgroundColor: '#F69221',
    },
  }),
)(Badge);

export const NotificationIcon = () => {

  const classes = useStyles();

  const { open, anchorEl, handleClick, handleClose } = useOpenCloseMenu();

  return (
    <>
      <IconButton onClick={handleClick} aria-label="notification" >
        <StyledBadge badgeContent={6} color="secondary">
          <NotificationsIcon
            className={classes.icon}
          />
        </StyledBadge>
      </IconButton>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        className={classes.menu}
      >
        {/* <MenuItem onClick={ handleClose }>Cargar horas</MenuItem> */}
      </Menu>
    </>
  )
}
