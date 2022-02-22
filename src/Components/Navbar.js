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
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { motion } from 'framer-motion';
import '../styles/Navbar.css'
// import LOGO03 from '../LOGO03.svg'

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

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
    background: 'rgb(216, 216, 216);'
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
          <ListItemText primary={"INICIO"}/>       
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
          <ListItemText primary={"SERVICIOS"}/>
        </ListItem>
        </Link>

        <Link to='/contáctanos' className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary={"CONTACTO"}/>
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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{opacity: 0}}>
      <ElevationScroll {...props}>
      <AppBar position="fixed" className={classes.toolbar} elevation={0}>
        <Toolbar variant="regular">
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon className="burger" fontSize="large"/>
                {/* <RadioButtonUncheckedIcon className="burger" fontSize="medium"/> */}
              </IconButton>
              <p className="navbar-title">FIZZEL FURNITURE 360</p>
              {/* <img src={LOGO03} className={classes.logo} alt='Fizzel Furniture 360 (FF360)'/> */}
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      </motion.div>
    </div>
  );
}

export default Navbar;