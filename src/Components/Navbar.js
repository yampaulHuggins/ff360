import React from 'react';
import {Link} from 'react-router-dom'; 
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home'
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import '../styles/Navbar.css'
// import LOGO03 from '../LOGO03.svg'

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: 'rgba(255,255,255,0);'
  },
  logo: {
    width: '5%'
  }
}))

function Navbar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <CloseIcon/>
          </ListItemIcon>
        </ListItem>

        <Link to='/' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Inicio"}/>       
        </ListItem>
        </Link>

        {/* <Link to='/cotizaciones' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon/>
          </ListItemIcon>
          <ListItemText primary={"Cotizaciones"}/>
        </ListItem>
        </Link> */}

        <Link to='/servicios' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon/>
          </ListItemIcon>
          <ListItemText primary={"Servicios"}/>
        </ListItem>
        </Link>

        <Link to='/contáctanos' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary={"Contáctanos"}/>
        </ListItem>
        </Link>

        {/* <Link to='/historia' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <QuestionAnswerIcon/>
          </ListItemIcon>
          <ListItemText primary={"Historia"}/>
        </ListItem>
        </Link> */}
      </List>      
      <Divider />
    </div>
  );

  return (
    <div>
      <AppBar position="fixed" className={classes.toolbar} elevation={0}>
        <Toolbar variant="regular">
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon className="burger" fontSize="large"/>
                {/* <RadioButtonUncheckedIcon className="burger" fontSize="medium"/> */}
              </IconButton>
              {/* <img src={LOGO03} className={classes.logo} alt='Fizzel Furniture 360 (FF360)'/> */}
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;