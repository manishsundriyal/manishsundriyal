import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// import components
import ImageAvatar from '../imageAvatar/imageAvatar';

// import page components
import HomePage from '../homePage/homePage';
import AboutPage from '../aboutPage/aboutPage';
import BlogPage from '../blogPage/blogPage';
import InstagramPage from '../instagramPage/instagramPage';
import ContactPage from '../contactPage/contactPage';
import ErrorPage from '../errorPage/errorPage';

// import Icons
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AccountIcon from '@material-ui/icons/AccountBox';
import Description from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class ResponsiveDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      mainPage: 'Home',
      appBarTitle: 'Home',
    }
  }

  handleDrawerToggle = () => {
    this.setState(prevState => ({
      mobileOpen: !prevState.mobileOpen,
    }));
  };x
  handleListItemClick = key => {
    this.setState({ mainPage: key, mobileOpen: false, appBarTitle: key })
    console.log("---key---", key);
  };
  getPrimarySideOptions = () => {
    return [
      {
        text: 'Home',
        icon: <HomeIcon />,
      },
      {
        text: 'About',
        icon: <AccountIcon />,
      },
      {
        text: 'Blog',
        icon: <Description />,
      },
    ];
  };
  getSecondarySideOptions = () => {
    return [
      {
        text: 'Instagram',
        icon: <MailIcon />,
      },
      {
        text: 'Contact',
        icon: <InboxIcon />,
      },
    ];
  };
  getMainPage = () => {
    const { mainPage } = this.state;
    if (mainPage === 'Home') {
      return <HomePage />;
    }
    if (mainPage === 'About') {
      return <AboutPage />;
    }
    if (mainPage === 'Blog') {
      return <BlogPage />;
    }

    if (mainPage === 'Instagram') {
      return <InstagramPage />;
    }

    if (mainPage === 'Contact') {
      return <ContactPage />;
    }

    return <ErrorPage />;
  }
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar}>
          <ImageAvatar />
        </div>
        <Divider />
        <List>
          {this.getPrimarySideOptions().map(({text, icon}) => (
            <ListItem button key={text} onClick={() => this.handleListItemClick(text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {this.getSecondarySideOptions().map(({text, icon}) => (
            <ListItem button key={text} onClick={() => this.handleListItemClick(text)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              {this.state.appBarTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
              {this.getMainPage()}
        </main>
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
